/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Problem from "./components/Problem";
import Approach from "./components/Approach";
import Services from "./components/Services";
import PortfolioSummary from "./components/PortfolioSummary";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'portfolio'>('home');

  const handleViewAllPortfolio = () => {
    setCurrentTab('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        
        {currentTab === 'home' && (
          <>
            <Hero />
            <Stats />
            <Problem />
            <Approach />
            <Services />
            <PortfolioSummary 
              onViewAllCases={handleViewAllPortfolio} 
            />
            <Process />
            <Testimonials />
            <FAQ />
            <CTASection />
          </>
        )}

        {currentTab === 'portfolio' && (
          <Portfolio 
            onBackToHome={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

