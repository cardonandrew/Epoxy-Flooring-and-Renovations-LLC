import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxMg-QhwOORvo9wUHa23Sf6r1X_OenapNJgBcRoCLXiqPgOEN75cas2qZA6mnVq2gZF/exec";

const serviceLabels: Record<string, string> = {
  solid: "Solid Color Epoxy",
  flake: "Flake / Chip Epoxy",
  painting: "Garage Painting",
  concrete: "Concrete Work",
  trash: "Trash Removal",
  powder: "Powder Coatings",
  package: "Full Garage Package",
  unsure: "Not Sure Yet",
};

type FormFields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  sqft: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

/** Strip everything except digits */
const digitsOnly = (val: string) => val.replace(/\D/g, "");

/** Basic email regex check */
const isValidEmail = (val: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

/** Validate the whole form, returns an errors object */
const validate = (form: FormFields): FormErrors => {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const phoneDigits = digitsOnly(form.phone);
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length < 10) {
    errors.phone = "Enter a valid 10-digit phone number.";
  } else if (!/^[\d\s\-()+.]+$/.test(form.phone.trim())) {
    errors.phone = "Phone number can only contain digits, spaces, or ( ) - + .";
  }

  if (form.email.trim() && !isValidEmail(form.email)) {
    errors.email = "Please enter a valid email address (e.g. john@example.com).";
  }

  if (form.sqft.trim() && !/^\d+$/.test(form.sqft.trim())) {
    errors.sqft = "Square footage must be a whole number (digits only).";
  }

  return errors;
};

/** Inline error message component */
const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-destructive">
      <AlertCircle className="w-3 h-3 flex-shrink-0" />
      {message}
    </p>
  ) : null;

const ContactSection = () => {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    sqft: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  /** Track which fields have been touched so we only show errors after blur */
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Re-validate the changed field immediately if already touched
    if (touched[name as keyof FormFields]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormFields] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormFields] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched so all errors show
    const allTouched: Partial<Record<keyof FormFields, boolean>> = {
      name: true, email: true, phone: true, service: true, sqft: true, message: true,
    };
    setTouched(allTouched);

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field
      const firstKey = Object.keys(validationErrors)[0];
      const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      service: serviceLabels[form.service] || form.service || "",
      sqft: form.sqft,
      message: form.message,
    };

    console.log("Submitting quote request (fire-and-forget):", payload);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      console.log("Google Sheets submission completed in background.");
    }).catch((err) => {
      console.error("Background submission error (non-blocking):", err);
    });

    setSubmitted(true);
  };

  const inputClass = (field: keyof FormFields) =>
    `w-full bg-input border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
      touched[field] && errors[field]
        ? "border-destructive focus:border-destructive"
        : "border-border focus:border-primary"
    }`;

  return (
    <section id="contact" className="py-28 px-6 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            READY TO <span className="text-primary neon-glow">UPGRADE?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form or call us directly. We offer free, no-obligation on-site estimates throughout Utah County and Salt Lake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a
              href="tel:+18018886371"
              className="group flex items-center gap-4 p-6 rounded-sm border border-primary/30 card-gradient neon-border hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0 animate-pulse-neon">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-0.5">Call Us Now</p>
                <p className="text-xl font-black text-foreground">801-888-6371</p>
                <p className="text-xs text-muted-foreground mt-0.5">Mon–Sat, 7am–6pm</p>
              </div>
            </a>

            <a
              href="mailto:epoxynavasarteaga@gmail.com"
              className="flex items-center gap-4 p-6 rounded-sm border border-border card-gradient hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-0.5">Email Us</p>
                <p className="font-semibold text-foreground text-sm break-all">epoxynavasarteaga@gmail.com</p>
                <p className="text-xs text-muted-foreground mt-0.5">We reply within 24 hours</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-sm border border-border card-gradient">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-0.5">Service Area</p>
                <p className="font-semibold text-foreground">Utah County & Salt Lake</p>
                <p className="text-xs text-muted-foreground mt-0.5">Free on-site estimates</p>
              </div>
            </div>

            <div className="p-6 rounded-sm border border-border card-gradient">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Why Choose Us</p>
              <ul className="space-y-2.5">
                {[
                  "Free on-site estimates",
                  "No-obligation quotes",
                  "Licensed & insured",
                  "Satisfaction guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8 rounded-sm border border-border card-gradient relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-neon">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">Request Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thanks, <strong className="text-foreground">{form.name}</strong>! We'll review your request and reach out within 1 business day to schedule your free estimate.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", service: "", sqft: "", message: "" });
                    setErrors({});
                    setTouched({});
                  }}
                  className="mt-6 text-sm text-primary border border-primary/30 px-6 py-2 rounded-sm hover:bg-primary/10 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-5">
                <div>
                  <p className="text-xl font-black text-foreground mb-1">Request a Free Quote</p>
                  <p className="text-sm text-muted-foreground">Fill in your details and we'll get back to you fast.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs text-muted-foreground tracking-widest uppercase mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Smith"
                      className={inputClass("name")}
                      autoComplete="name"
                    />
                    <FieldError message={touched.name ? errors.name : undefined} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs text-muted-foreground tracking-widest uppercase mb-1.5">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="(801) 000-0000"
                      className={inputClass("phone")}
                      autoComplete="tel"
                    />
                    <FieldError message={touched.phone ? errors.phone : undefined} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-muted-foreground tracking-widest uppercase mb-1.5">
                    Email <span className="text-muted-foreground text-xs normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={inputClass("email")}
                    autoComplete="email"
                  />
                  <FieldError message={touched.email ? errors.email : undefined} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label className="block text-xs text-muted-foreground tracking-widest uppercase mb-1.5">Service Type</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("service")}
                    >
                      <option value="">Select a service…</option>
                      <option value="solid">Solid Color Epoxy</option>
                      <option value="flake">Flake / Chip Epoxy</option>
                      <option value="painting">Garage Painting</option>
                      <option value="concrete">Concrete Work</option>
                      <option value="trash">Trash Removal</option>
                      <option value="powder">Powder Coatings</option>
                      <option value="package">Full Garage Package</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                    <FieldError message={touched.service ? errors.service : undefined} />
                  </div>

                  {/* Sq Ft */}
                  <div>
                    <label className="block text-xs text-muted-foreground tracking-widest uppercase mb-1.5">Approx. Sq Ft</label>
                    <input
                      type="text"
                      name="sqft"
                      inputMode="numeric"
                      value={form.sqft}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. 400"
                      className={inputClass("sqft")}
                    />
                    <FieldError message={touched.sqft ? errors.sqft : undefined} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-muted-foreground tracking-widest uppercase mb-1.5">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    placeholder="Tell us about your project — condition of the floor, timeline, any other details…"
                    className={`${inputClass("message")} resize-none`}
                  />
                  <FieldError message={touched.message ? errors.message : undefined} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm py-3.5 rounded-sm hover:bg-primary/90 transition-all duration-200 animate-pulse-neon disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Free Quote Request
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within a few hours during business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
