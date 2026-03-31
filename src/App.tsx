import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "@/pages/Index";
import SectionPage from "@/pages/SectionPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<SectionPage scrollTo="products" />} />
            <Route path="/gallery" element={<SectionPage scrollTo="gallery" />} />

            <Route path="/service-area" element={<SectionPage scrollTo="service-area" />} />
            <Route path="/about" element={<SectionPage scrollTo="about" />} />
            <Route path="/contact" element={<SectionPage scrollTo="contact" />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
          </Routes>
          <SpeedInsights />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
