import { motion } from "motion/react";
import { AlertCircle, TrendingDown, Users, Clock } from "lucide-react";

const cards = [
  {
    icon: <TrendingDown className="text-brand-dourado" size={28} />,
    title: "Investe em anúncios e não vê retorno",
    description: "O dinheiro sai, os cliques chegam, mas as vendas não aparecem. Você nunca sabe o que está falhando."
  },
  {
    icon: <Users className="text-brand-dourado" size={28} />,
    title: "Leads chegam, mas não convertem",
    description: "Tem movimento, mas o lead esfria. Falta estrutura para nutrir, acompanhar e fechar com eficiência."
  },
  {
    icon: <AlertCircle className="text-brand-dourado" size={28} />,
    title: "Não sabe o que funciona no seu nicho",
    description: "Cada negócio é diferente. Estratégias genéricas não funcionam para o seu mercado específico."
  },
  {
    icon: <Clock className="text-brand-dourado" size={28} />,
    title: "Sem tempo para testar e otimizar",
    description: "Você precisa tocar o negócio. Não tem como ficar ajustando campanha e analisando dados o dia todo."
  }
];

export default function Problem() {
  return (
    <section className="bg-brand-offwhite py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] text-brand-dourado-forte uppercase mb-4 block"
            >
              Você se identifica?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-brand-marrom leading-tight mb-6"
            >
              Talvez você já tenha vivido algum desses cenários
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-marrom-md text-lg font-light leading-relaxed mb-8"
            >
              A maioria dos negócios não tem problema de produto — tem problema de estratégia digital.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-lg border border-brand-bege-md shadow-sm border-l-4 border-l-brand-dourado transition-all"
              >
                <div className="mb-6">{card.icon}</div>
                <h4 className="text-xl font-bold text-brand-marrom mb-4">{card.title}</h4>
                <p className="text-brand-marrom-md text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
