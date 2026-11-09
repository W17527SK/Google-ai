import { motion } from "motion/react";
import { Target, Cpu, Layout, Link2, BarChart3, Compass } from "lucide-react";

const services = [
  {
    icon: <Target size={24} />,
    title: "Gestão de Anúncios",
    description: "Meta Ads (Instagram e Facebook) e Google Ads gerenciados com foco em vendas. Criamos, testamos e otimizamos anúncios para gerar o menor custo por cliente.",
    tags: ["Meta Ads", "Google Ads", "Vendas"]
  },
  {
    icon: <Cpu size={24} />,
    title: "Automação com IA",
    description: "Atendimento no WhatsApp automático, triagem rápida de contatos e criação ágil de materiais promocionais para economizar seu tempo.",
    tags: ["WhatsApp", "Agilidade", "Automação"]
  },
  {
    icon: <Layout size={24} />,
    title: "Páginas que Vendem",
    description: "Landing Pages profissionais, rápidas e persuasivas, feitas para apresentar seu produto com autoridade e levar o visitante direto para a compra.",
    tags: ["Landing Page", "Celular & Web"]
  },
  {
    icon: <Link2 size={24} />,
    title: "Acompanhamento de Leads",
    description: "Organizamos os contatos do seu negócio do primeiro clique até o fechamento: mensagens automáticas de lembrete e recuperação de vendas.",
    tags: ["WhatsApp", "Fechamento", "Recuperação"]
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Métricas Transparentes",
    description: "Você sabe exatamente de onde veio cada cliente e cada venda. Relatórios simples e diretos para você acompanhar o retorno do seu investimento.",
    tags: ["Resultados", "Retorno", "Clareza"]
  },
  {
    icon: <Compass size={24} />,
    title: "Diagnóstico Estratégico",
    description: "Antes de gastar um centavo em anúncios, analisamos seu negócio, seus concorrentes e seu público para indicar o caminho mais lucrativo.",
    tags: ["Planejamento", "Foco", "Direcionamento"]
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
