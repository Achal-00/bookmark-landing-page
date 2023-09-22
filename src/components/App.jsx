import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import DownloadSection from "./DownloadSection/DownloadSection";
import FaqSection from "./FaqSection/FaqSection";
import NewsletterSection from "./NewsletterSection/NewsletterSection";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="font-custom-font-family relative">
      <LandingSection />
      <FeatureSection />
      <DownloadSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
