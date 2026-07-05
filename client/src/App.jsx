import { useEffect, useState } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ScrollManager from "./components/UI/ScrollManager";
import NotFoundPage from "./pages/NotFound";
import OurPrograms from "./pages/OurPrograms";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";
import Overview from "./pages/Overview";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import SupportUs from "./pages/SupportUs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/our-programs" element={<OurPrograms />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/support-us" element={<SupportUs />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
