import { motion } from "motion/react";
import { TrendingUp, Award, DollarSign, CheckCircle2 } from "lucide-react";

const stats = [
  { 
    value: "+10", 
    label: "Negócios atendidos",
    detail: "B2B & Serviços Premium",
    icon: <Award size={18} className="text-[#C8A96A]" />
  },
  { 
    value: "3.8×", 
    label: "ROI médio dos clientes",
    detail: "Mais vendas com menos custo",
    icon: <TrendingUp size={18} className="text-[#C8A96A]" />
  },
  { 
    value: "R$ 3M+", 
    label: "Em vendas geradas",
    detail: "Vendas reais de clientes",
    icon: <DollarSign size={18} className="text-[#C8A96A]" />
  },
  { 
    value: "100%", 
    label: "Estratégia personalizada",
    detail: "Zero fórmulas prontas",
    icon: <CheckCircle2 size={18} className="text-[#C8A96A]" />
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0F0D0B] text-white py-16 sm:py-20 border-b border-[#241F1A] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#14110E] border border-[#262019] hover:border-[#C8A96A]/40 p-6 rounded-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-lg bg-[#1C1814] border border-[#2D261E] group-hover:border-[#C8A96A]/30 transition-colors">
                  {stat.icon}
                </span>
                <span className="text-[10px] font-mono text-[#E8DCCB]/50 uppercase tracking-wider">
                  Métrica Validada
                </span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#C8A96A] mb-1.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#E8DCCB]/60 font-light">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
