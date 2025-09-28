import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Admissions from "./pages/Admissions";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import AcademicsSimple from "./pages/AcademicsSimple";
import AcademicsWorking from "./pages/AcademicsWorking";
import StudentLife from "./pages/StudentLife";
import NewsEvents from "./pages/NewsEvents";
import Portals from "./pages/Portals";
import { Contact } from "./pages/Contact";
import TestPage from "./pages/TestPage";
import { useEffect } from "react";
import { registerSW } from "@/lib/pwa";

const queryClient = new QueryClient();

function AppShell() {
  useEffect(() => {
    // persist theme
    const t = localStorage.getItem("theme");
    if (t) document.documentElement.classList.toggle("dark", t === "dark");
    registerSW();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/academics" element={<AcademicsWorking />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/portals" element={<Portals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/athletics" element={<Placeholder title="Athletics" />} />
            <Route path="/arts" element={<Placeholder title="Arts" />} />
            <Route path="/technology" element={<Placeholder title="Technology" />} />
            <Route path="/safety" element={<Placeholder title="Safety & Policies" />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<AppShell />);
