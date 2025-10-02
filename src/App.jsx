import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero-section/HeroSection";
import ClassesSection from "./components/Classes-section/ClassesSection";
import AboutUs from "./components/Aboutus/AboutUs";
import GallerySection from "./components/Gallery-section/GallerySection";
import ContactSection from "./components/Contact-section/ContactSection";
import Showcase from "./components/Showcase/Showcase";
import Footer from "./components/Footer/Footer";

// Pages
import AboutUsPage from "./pages/AboutUsPage";
import ClassesPage from "./pages/ClassesPage";
import EnrollmentPage from "./pages/EnrollmentPage";
import GalleryPage from "./pages/GalleryPage";
import KidsDancePage from "./pages/KidsDancePage";
import AdultDancePage from "./pages/AdultDancePage";
import ZumbaPage from "./pages/ZumbaPage";
import YogaPage from "./pages/YogaPage";
import WeddingDancePage from "./pages/WeddingDancePage";
import EventPage from "./pages/EventPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ClassesSection />
              <AboutUs />
              <GallerySection />
              <Showcase />
              <ContactSection />
            </>
          }
        />
        {/* About Page */}
        <Route path="/about" element={<AboutUsPage />} />
        {/* Classes Page */}
        <Route path="/classes" element={<ClassesPage />} />
        {/* Gallery Page */}
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Kids Dance Page */}
        <Route path="/kids-dance" element={<KidsDancePage />} />
        <Route path="/adult-dance" element={<AdultDancePage />} />
        {/* Wedding Dance Page */}
        <Route path="/wedding-dance" element={<WeddingDancePage />} />
        {/* Zumba Page */}
        <Route path="/zumba" element={<ZumbaPage />} />
        {/* Yoga Page */}
        <Route path="/yoga" element={<YogaPage />} />
        {/* Event Page */}
        <Route path="/events" element={<EventPage />} />
        {/* Enrollment Page */}
        <Route path="/enrollment" element={<EnrollmentPage />} />
        {/* ✅ Contact Page */}
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      {/* ✅ Universal footer, shows only once */}
      <Footer />
    </>
  );
}

export default App;
