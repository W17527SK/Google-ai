import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentTab: 'home' | 'portfolio';
  setCurrentTab: (tab: 'home' | 'portfolio') => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  return (
    <nav className="bg-[#0F0D0B]/85 backdrop-blur-xl border-b border-[#241F1A] py-3.5 sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <motion.div 
            onClick={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer select-none"
          >
            <div className="text-left">
              <div className="text-base sm:text-lg font-serif font-bold tracking-tight uppercase leading-none">
                <span className="text-[#C8A96A]">PEDRO</span> <span className="text-white">H. SOUZA</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Center & Right Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            onClick={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-xs sm:text-sm font-medium transition-colors uppercase tracking-wider relative py-1 cursor-pointer ${
              currentTab === 'home' ? 'text-[#C8A96A] font-semibold' : 'text-[#E8DCCB]/60 hover:text-white'
            }`}
          >
            Início
            {currentTab === 'home' && (
              <motion.span 
                layoutId="activeTabUnderline" 
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C8A96A]"
              />
            )}
          </button>

          <button
            onClick={() => {
              setCurrentTab('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-xs sm:text-sm font-medium transition-colors uppercase tracking-wider relative py-1 cursor-pointer ${
              currentTab === 'portfolio' ? 'text-[#C8A96A] font-semibold' : 'text-[#E8DCCB]/60 hover:text-white'
            }`}
          >
            Nossos Cases
            {currentTab === 'portfolio' && (
              <motion.span 
                layoutId="activeTabUnderline" 
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C8A96A]"
              />
            )}
          </button>

          {/* Direct WhatsApp Consultation Button */}
          <a
            href="https://wa.me/5511995539846?text=Olá%2C+vi+o+portfólio+e+gostaria+de+conversar+sobre+um+projeto."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#1C1814] border border-[#C8A96A]/40 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0F0D0B] text-xs font-semibold tracking-wide transition-all"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}
