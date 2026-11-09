import { motion } from "motion/react";
import { Sparkles, ArrowRight, Layers } from "lucide-react";

interface PortfolioSummaryProps {
  onViewAllCases: () => void;
}

export default function PortfolioSummary({ onViewAllCases }: PortfolioSummaryProps) {
  const highlights = [
    {
      title: "Joolt Bike Indoor",
      category: "Saúde & Estilo",
      metric: "+310% Agendamentos",
      desc: "Experiência digital sensorial e minimalista focada na conversão de novos alunos.",
      icon: "🧘"
    },
    {
      title: "PowerAll Academia",
      category: "Equipamentos & B2B",
      metric: "+40% Conversão Direta",
      desc: "Landing Page de autoridade para maquinário esportivo e vendas comerciais de alto ticket.",
      icon: "🏋️"
    }
  ];

  return (
    <section className="bg-brand-bege py-24 border-t border-brand-bege-md/45">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-dourado-forte uppercase mb-4 block">Nossos Projetos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-marrom leading-tight">
              Apenas Landing Pages que geram <span className="text-brand-dourado-forte italic">Dinheiro no Caixa</span>
            </h2>
          </div>
          <div>
            <p className="text-brand-marrom-md text-base md:text-lg font-light max-w-md lg:mb-2 leading-relaxed">
              Diferente de agências tradicionais que só focam em volume estático, cada pixel que desenhamos tem a missão de qualificar e converter.
            </p>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={onViewAllCases}
              className="bg-brand-offwhite p-8 rounded-2xl border border-brand-bege-md hover:border-brand-dourado/50 cursor-pointer shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm select-none">
                    {item.icon}
                  </span>
                  <span className="text-brand-dourado-forte font-bold text-xs bg-brand-bege-md/30 py-1 px-3 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-brand-marrom group-hover:text-brand-dourado-forte transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-brand-marrom-md text-sm leading-relaxed mt-3 mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-bege-md flex items-center justify-between">
                <span className="text-brand-marrom text-sm font-bold flex items-center gap-1.5">
                  <Sparkles size={14} className="text-brand-dourado" /> {item.metric}
                </span>
                <span className="text-brand-dourado font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  Ver completo <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Redirect CTA Button */}
        <div className="flex flex-col items-center gap-10 mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewAllCases}
            className="inline-flex items-center gap-3 bg-brand-marrom text-brand-dourado px-10 py-5 rounded-sm font-bold text-lg hover:bg-brand-preto transition-colors shadow-xl cursor-pointer"
          >
            Acessar aba de Cases Completos <Layers size={18} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
