import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "RC",
    name: "Ricardo C.",
    business: "Clínica estética — SP",
    quote: "Tentei fazer tráfego sozinho por 8 meses sem resultado. Em 45 dias com a Delivery Grow, o custo por lead caiu 60% e as vendas triplicaram. O diagnóstico inicial foi o que mudou tudo."
  },
  {
    initials: "AM",
    name: "Ana M.",
    business: "SaaS B2B — RJ",
    quote: "A parte de CRM e automação foi um divisor de águas. Nossos leads paravam de responder depois do primeiro contato. Agora temos uma jornada completa."
  },
  {
    initials: "FS",
    name: "Felipe S.",
    business: "E-commerce — MG",
    quote: "O que me impressionou foi a seriedade com os dados. Sei exatamente de onde vem cada cliente, qual campanha trouxe mais receita e onde estou perdendo dinheiro."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-brand-bege py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-brand-dourado-forte uppercase mb-4 block"
          >
            Resultados reais
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-marrom mb-6"
          >
            O que nossos clientes dizem
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl border border-brand-bege-md shadow-sm"
            >
              <div className="flex text-brand-dourado mb-6 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <blockquote className="text-brand-marrom-md italic text-lg leading-relaxed mb-10">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-marrom text-brand-dourado rounded-full flex items-center justify-center font-bold">
                  {item.initials}
                </div>
                <div>
                  <div className="text-brand-marrom font-bold text-sm">{item.name}</div>
                  <div className="text-brand-marrom-md text-xs">{item.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
