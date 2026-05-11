import { useEffect, useState } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ScrollManager from "./components/UI/ScrollManager";
import NotFoundPage from "./pages/NotFound";

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
      </Routes>
    </>
  );
}

export default App;
