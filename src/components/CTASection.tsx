import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-brand-marrom py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-brand-dourado/30 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative badge */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-brand-dourado text-brand-marrom px-6 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            Atendimento Estratégico
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 mt-6 leading-tight">
            Pronto para transformar a<br />
            <span className="text-brand-dourado">presença e vendas do seu negócio?</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Converse com nossos especialistas e descubra como tráfego direcionado, páginas de alta conversão e automação podem acelerar seus resultados.
          </p>
          
          <ul className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 px-4">
            {["Análise de funil", "Mapa estratégico", "Identificação de gargalos", "Plano personalizado"].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-white/80 text-sm whitespace-nowrap">
                <Check size={16} className="text-brand-dourado" strokeWidth={3} /> {item}
              </li>
            ))}
          </ul>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5511995539846?text=Olá%2C+quero+falar+com+um+estrategista+%28vi+no+site%29" 
            className="inline-block bg-brand-dourado text-brand-marrom px-12 py-6 rounded-sm font-bold text-xl hover:bg-brand-dourado-forte hover:text-white transition-all shadow-2xl"
          >
            Falar no WhatsApp agora
          </motion.a>
          
          <p className="text-white/30 text-xs mt-8">Resposta em até 2 horas em dias úteis</p>
        </motion.div>
      </div>
    </section>
  );
}
