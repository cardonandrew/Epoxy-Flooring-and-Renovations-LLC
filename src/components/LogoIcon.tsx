const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Epoxy Flooring and Renovations Logo"
  >
    {/* ── Square frame ──────────────────────────────────────────── */}
    {/* Bottom */}
    <line x1="12" y1="84" x2="80" y2="84" stroke="currentColor" strokeWidth="6.5" strokeLinecap="square" />
    {/* Right */}
    <line x1="80" y1="84" x2="80" y2="16" stroke="currentColor" strokeWidth="6.5" strokeLinecap="square" />
    {/* Top — right half only (left is covered by paint splash) */}
    <line x1="80" y1="16" x2="46" y2="16" stroke="currentColor" strokeWidth="6.5" strokeLinecap="square" />
    {/* Left — bottom half only */}
    <line x1="12" y1="84" x2="12" y2="52" stroke="currentColor" strokeWidth="6.5" strokeLinecap="square" />

    {/* ── Paint splash / wave filling top-left area ─────────────── */}
    {/* Fluid shape that spills over the open corner */}
    <path
      d="M 12 52
         C 12 46, 9 40, 13 33
         C 16 27, 22 23, 27 17
         C 31 11, 33 5, 40 6
         C 47 7, 43 17, 39 22
         C 35 27, 29 29, 32 36
         C 35 42, 44 39, 50 32
         C 54 27, 50 16, 46 16
         L 12 16
         Z"
      fill="currentColor"
    />

    {/* Small floating paint drops above */}
    <circle cx="20" cy="5" r="3.5" fill="currentColor" />
    <circle cx="32" cy="2" r="2.5" fill="currentColor" />

    {/* ── Paint roller ───────────────────────────────────────────── */}
    {/* Roller cylinder (head) — rotated ~-45deg, positioned center */}
    <g transform="rotate(-45, 62, 62)">
      {/* Roller barrel */}
      <rect x="50" y="55" width="24" height="13" rx="6" fill="currentColor" />
      {/* Axle cap left */}
      <rect x="48" y="58" width="4" height="7" rx="2" fill="currentColor" />
      {/* Axle cap right */}
      <rect x="74" y="58" width="4" height="7" rx="2" fill="currentColor" />
    </g>

    {/* Handle stem connecting roller to grip */}
    <line x1="74" y1="74" x2="88" y2="90" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />

    {/* Grip end */}
    <circle cx="88" cy="90" r="4" fill="currentColor" />
  </svg>
);

export default LogoIcon;
