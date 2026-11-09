import { motion } from "motion/react";
import { Target, Cpu, Layout, Link2, BarChart3, Compass } from "lucide-react";

const services = [
  {
    icon: <Target size={24} />,
    title: "Gestão de Tráfego",
    description: "Meta Ads e Google Ads gerenciados com foco em ROI. Criamos, testamos e otimizamos campanhas continuamente para gerar o menor custo por resultado.",
    tags: ["Meta", "Google", "ROI"]
  },
  {
    icon: <Cpu size={24} />,
    title: "IA Aplicada ao Negócio",
    description: "Usamos IA na nossa operação e implementamos nos processos do cliente: atendimento automatizado, qualificação de leads e geração de conteúdo em escala.",
    tags: ["Automação", "Escala", "Eficiência"]
  },
  {
    icon: <Layout size={24} />,
    title: "Landing Pages",
    description: "Páginas de alta conversão criadas com estratégia, design premium e trackeamento completo integrado — como esta que você está lendo agora.",
    tags: ["Conversão", "Mobile First"]
  },
  {
    icon: <Link2 size={24} />,
    title: "CRM & Fluxos de Nutrição",
    description: "Estruturamos a jornada do seu lead do primeiro contato à recompra: fluxos de retenção, monetização e acompanhamento com trackeamento de cada etapa.",
    tags: ["CRM", "Retenção", "LTV"]
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Trackeamento Completo",
    description: "Você sabe de onde vem cada venda. Configuramos Pixel, Google Tag, eventos de conversão e dashboards para você tomar decisões com dados reais.",
    tags: ["Analytics", "Dados", "Decisão"]
  },
  {
    icon: <Compass size={24} />,
    title: "Consultoria Estratégica",
    description: "Antes de qualquer ação, fazemos uma análise completa do seu negócio. Entregamos um diagnóstico honesto e um plano claro de onde e como crescer.",
    tags: ["Diagnóstico", "Plano", "Clareza"]
  }
];

export default function Services() {
  return (
    <section className="bg-brand-marrom py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-brand-dourado uppercase mb-4 block"
          >
            O que entregamos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Soluções que trabalham juntas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg max-w-2xl mx-auto font-light"
          >
            Cada serviço é poderoso sozinho. Combinados, criam uma operação digital completa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-brand-dourado/20 p-10 rounded-xl hover:bg-brand-dourado/5 transition-all group"
            >
              <div className="w-14 h-14 bg-brand-dourado/10 rounded-lg flex items-center justify-center text-brand-dourado mb-8 transition-colors group-hover:bg-brand-dourado/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dourado mb-4">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="bg-brand-dourado/10 text-brand-dourado text-[10px] tracking-widest uppercase py-1 px-3 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
