import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/5511995539846?text=Olá%2C+gostaria+de+saber+mais+sobre+o+trabalho+de+Pedro+H.+Souza"
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] flex items-center justify-center hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-all"
      title="Falar no WhatsApp"
    >
      <svg 
        width="30" 
        height="30" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" 
          fill="#FFFFFF"
        />
      </svg>
    </motion.a>
  );
}
