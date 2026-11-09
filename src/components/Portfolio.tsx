import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Sparkles, CheckCircle, ArrowLeft } from "lucide-react";

interface Project {
  title: string;
  category: string;
  url: string;
  description: string;
  highlight: string;
  focus: string;
  icon: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: "Joolt Bike Indoor",
    category: "Saúde & Estilo",
    url: "https://lp.joolt.com.br/sobre-a-joolt",
    description: "Uma experiência digital sensorial e clean para o estúdio premium da Joolt. Desenvolvido para inspirar qualidade de vida, bem-estar e conexões reais com o público exigente.",
    highlight: "+310% em Agendamentos de Visita",
    focus: "Design Visual Premium & Prova Social Emocionante",
    icon: "🧘",
    stats: [
      { label: "Retenção na Página", value: "3m 45s" },
      { label: "Satisfação Visual", value: "99.4%" }
    ]
  },
  {
    title: "PowerAll Academia",
    category: "Equipamentos & B2B",
    url: "https://lp.powerall.com.br/powerall",
    description: "Landing Page de autoridade para venda comercial de maquinário esportivo profissional. Design impactante com tonalidades fortes focado na robustez e engenharia dos equipamentos.",
    highlight: "Aumento de 145% de Ticket Médio",
    focus: "Página Rápida & Grid de Imagens de Altíssima Definição",
    icon: "🏋️",
    stats: [
      { label: "Conversão Direta", value: "+40%" },
      { label: "Engajamento", value: "+60%" }
    ]
  }
];

const categories = ["Todos", "Saúde & Estilo", "Equipamentos & B2B"];

interface PortfolioProps {
  onBackToHome: () => void;
  onNavigateToHiggs?: () => void;
}

export default function Portfolio({ onBackToHome, onNavigateToHiggs }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-brand-bege min-h-screen py-16">
      <div className="container mx-auto px-6">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 text-brand-marrom-md hover:text-brand-dourado font-medium transition-colors group cursor-pointer"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            Voltar para o Início
          </button>
          
          <div className="flex gap-2">
            <span className="bg-brand-marrom text-brand-dourado px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Casos Reais em Produção
            </span>
          </div>
        </div>

        <div className="text-center md:text-left mb-16 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-brand-marrom mb-6 leading-tight"
          >
            Nossas <span className="text-brand-dourado-forte italic">Landing Pages</span> em Ação
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-marrom-md text-lg font-light leading-relaxed"
          >
            Não criamos apenas interfaces estéticas; desenhamos estratégias de tráfego que culminam em faturamentos de verdade. Cada detalhe abaixo foi otimizado para maximizar a conversão.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 justify-start mb-12 border-b border-brand-bege-md pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all relative ${
                selectedCategory === cat 
                  ? "bg-brand-marrom text-brand-dourado shadow-md scale-105" 
                  : "bg-white text-brand-marrom-md border border-brand-bege-md hover:bg-brand-bege-md/35"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden border border-brand-bege-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Visual Browser Simulated Bar Mock */}
                <div className="bg-[#1C1814] px-4 py-3 border-b border-brand-marrom/10 flex items-center justify-between">
                  {/* Fake Browser Buttons */}
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-[#FC605C] rounded-full inline-block"></span>
                    <span className="w-3 h-3 bg-[#FCBC2F] inline-block rounded-full"></span>
                    <span className="w-3 h-3 bg-[#28C93F] inline-block rounded-full"></span>
                  </div>
                  {/* Fake URL Bar with actual project URL */}
                  <div className="bg-[#2D2823] text-brand-dourado/60 text-[10px] sm:text-xs py-1.5 px-6 rounded-md w-2/3 truncate text-center font-mono select-none">
                    {project.url.replace("https://", "")}
                  </div>
                  {/* Icon */}
                  <span className="text-sm">{project.icon}</span>
                </div>

                {/* Card Body */}
                <div className="p-8 md:p-10 flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-brand-bege-md text-brand-marrom text-[10px] font-bold uppercase py-1 px-3 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-brand-dourado-forte text-xs font-semibold flex items-center gap-1">
                      <Sparkles size={11} /> {project.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-brand-marrom mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-brand-marrom-md text-sm md:text-base leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Highlights & Bullet Points */}
                  <div className="bg-brand-bege/40 p-6 rounded-xl border border-brand-bege-md/50 mb-8">
                    <h4 className="text-xs font-bold text-brand-marrom-md uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-brand-dourado-forte" /> Foco de Construção:
                    </h4>
                    <p className="text-brand-marrom text-xs md:text-sm font-medium">
                      {project.focus}
                    </p>
                  </div>

                  {/* Stats Badges */}
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="border-l-2 border-l-brand-dourado pl-4 py-1">
                        <div className="text-xl md:text-2xl font-bold text-brand-marrom">
                          {stat.value}
                        </div>
                        <div className="text-[10px] md:text-xs text-brand-marrom-md uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link Button */}
                <div className="p-8 pt-0 border-t border-brand-bege-md/30">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer referrer"
                    className="w-full mt-6 bg-brand-marrom text-brand-dourado hover:bg-brand-dourado-forte hover:text-white transition-all text-center py-4 rounded-md font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    Navegar pelo Case <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Exclusive Higgs OS Banner in Portfolio */}
        {onNavigateToHiggs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-[#161310] text-[#E8DCCB] rounded-2xl p-8 sm:p-10 border border-[#C8A96A]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#C8A96A] text-[#141210] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                  Tecnologia Proprietária
                </span>
                <span className="text-xs text-[#C8A96A] font-mono">
                  SaaS Industrial & Multi-LLM
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Higgs OS — Plataforma de Orquestração de IA
              </h3>
              <p className="text-sm text-[#E8DCCB]/80 font-light leading-relaxed">
                Conheça nossa arquitetura enterprise com Protocolo de Emaranhamento para execução paralela assíncrona de múltiplos modelos de linguagem em tempo real.
              </p>
            </div>

            <button
              onClick={onNavigateToHiggs}
              className="shrink-0 bg-[#C8A96A] text-[#141210] hover:bg-[#A67C3B] hover:text-white font-bold text-sm px-7 py-4 rounded-sm transition-all cursor-pointer shadow-lg"
            >
              Ver Projeto Higgs →
            </button>
          </motion.div>
        )}

        {/* CTA Banner inside Portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-brand-marrom text-white rounded-3xl p-10 md:p-16 text-center border border-brand-dourado/30 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight text-white">
              Quer uma estrutura profissional <span className="text-brand-dourado">como estas</span> para o seu nicho?
            </h2>
            <p className="text-white/70 font-light mb-8 text-base">
              Nosso diagnóstico estratégico mapeia a estrutura perfeita para o seu público e mercado específicos, com foco em autoridade e conversão.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511995539846?text=Vi+o+portfólio+com+os+cases+e+quero+um+estudo+para+meu+delivery"
              target="_blank"
              rel="noreferrer referrer"
              className="inline-block bg-brand-dourado text-brand-marrom px-8 py-4 font-bold rounded-sm transition-colors hover:bg-brand-dourado-forte hover:text-white"
            >
              Falar com um Estrategista agora
            </motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
