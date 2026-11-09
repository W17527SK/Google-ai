import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  GitBranch, 
  MessageSquare, 
  ShieldCheck, 
  Compass
} from "lucide-react";

interface PersonalProjectsProps {
  onBackToHome: () => void;
  onSelectHiggs: () => void;
}

export default function PersonalProjects({ onBackToHome, onSelectHiggs }: PersonalProjectsProps) {
  return (
    <div className="bg-[#141210] text-[#E8DCCB] min-h-screen">
      {/* Top Header Bar */}
      <div className="border-b border-[#2D261E] bg-[#1A1612]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2.5 text-[#C8A96A] hover:text-white font-medium text-sm transition-colors group cursor-pointer"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span>Voltar ao Início</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D261E] text-[#C8A96A] border border-[#C8A96A]/30">
              <Sparkles size={12} /> Iniciativas Proprietárias
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C8A96A] text-[#141210]">
              SaaS & Software
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-[#2D261E]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C8A96A]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241F1A] border border-[#C8A96A]/30 text-xs text-[#C8A96A] uppercase tracking-[0.2em] font-semibold mb-6"
            >
              <Compass size={14} />
              Laboratório de Inovação & Engenharia
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6"
            >
              Projetos <span className="text-[#C8A96A] font-serif italic">Pessoais</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-[#E8DCCB]/80 font-light leading-relaxed mb-4"
            >
              Iniciativas autorais, plataformas SaaS de nível industrial e experimentações arquiteturais de Inteligência Artificial concebidas com rigor de engenharia e metodologia de co-criação simbiótica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* FEATURED CARD: HIGGS OS */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#1A1612] rounded-2xl border border-[#C8A96A]/40 shadow-2xl p-8 sm:p-12 hover:border-[#C8A96A] transition-all overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A67C3B] via-[#C8A96A] to-[#A67C3B]" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                
                {/* Content Left */}
                <div className="flex-1">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="bg-[#C8A96A] text-[#141210] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
                      Destaque Principal
                    </span>
                    <span className="bg-[#2D261E] text-[#C8A96A] border border-[#C8A96A]/30 text-xs font-mono px-3 py-1 rounded-sm">
                      SaaS Industrial • Ativo
                    </span>
                    <span className="hidden sm:inline-block text-xs text-[#E8DCCB]/50 font-mono">
                      Kernel v3.4
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3 group-hover:text-[#C8A96A] transition-colors">
                    Higgs OS
                  </h2>
                  <p className="text-[#C8A96A] text-sm sm:text-base font-medium mb-5">
                    Plataforma SaaS de Nível Industrial para Orquestração e Fluxos Complexos de IA
                  </p>

                  {/* Overview Paragraph */}
                  <p className="text-[#E8DCCB]/85 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl">
                    Diferente de ferramentas de automação linear convencionais, o Higgs viabiliza a execução paralela assíncrona de múltiplos agentes e a integração dinâmica de múltiplos modelos de linguagem (Gemini 3.0, GPT-4/5) em uma única jornada de usuário.
                  </p>

                  {/* 3 Key Pillar Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#241F1A] border border-[#3A3127] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#C8A96A] mb-1.5">
                        <GitBranch size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Emaranhamento</span>
                      </div>
                      <p className="text-xs text-[#E8DCCB]/70 leading-normal">
                        Execução paralela assíncrona com redução de até 65% na latência.
                      </p>
                    </div>

                    <div className="bg-[#241F1A] border border-[#3A3127] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#C8A96A] mb-1.5">
                        <Cpu size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Multi-Model</span>
                      </div>
                      <p className="text-xs text-[#E8DCCB]/70 leading-normal">
                        Orquestração dinâmica entre Google Gemini e OpenAI GPT.
                      </p>
                    </div>

                    <div className="bg-[#241F1A] border border-[#3A3127] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-[#C8A96A] mb-1.5">
                        <MessageSquare size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Meta API</span>
                      </div>
                      <p className="text-xs text-[#E8DCCB]/70 leading-normal">
                        Conexão direta oficial via Webhooks WhatsApp Cloud API.
                      </p>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs text-[#E8DCCB]/60 font-mono mr-1">Stack:</span>
                    {["Next.js 15", "Genkit", "Firebase", "Gemini 3.0", "GPT-5", "WhatsApp Cloud API", "HDK"].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-[#141210] border border-[#2D261E] text-[#C8A96A] rounded font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Action Button Right */}
                <div className="lg:w-64 shrink-0 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#2D261E] pt-6 lg:pt-0 lg:pl-8">
                  <div className="space-y-3 mb-6">
                    <div className="text-xs uppercase tracking-wider text-[#E8DCCB]/60 font-mono">
                      Metodologia
                    </div>
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <Sparkles size={14} className="text-[#C8A96A]" />
                      Co-Criação Simbiótica
                    </div>
                    <p className="text-xs text-[#E8DCCB]/70 font-light leading-relaxed">
                      Arquiteto e Visionário do Produto em ressonância com o Higgs Development Kernel.
                    </p>
                  </div>

                  <button
                    onClick={onSelectHiggs}
                    className="w-full bg-[#C8A96A] text-[#141210] hover:bg-[#A67C3B] hover:text-white font-bold text-sm px-6 py-4 rounded-sm transition-all shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group/btn"
                  >
                    <span>Ver Página do Higgs</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Methodology & Vision Section */}
      <section className="py-20 bg-[#181410] border-t border-[#2D261E]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-bold block mb-2">
                Filosofia de Construção
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Por que desenvolver projetos pessoais?
              </h2>
              <p className="text-sm sm:text-base text-[#E8DCCB]/80 font-light max-w-2xl mx-auto">
                Projetos autorais são o terreno onde hipóteses radicais são testadas, novas arquiteturas se consolidam e tecnologias de ponta são refinadas antes de chegarem à escala de mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1C1814] p-6 rounded-xl border border-[#2D261E]">
                <div className="w-9 h-9 rounded-lg bg-[#241F1A] flex items-center justify-center text-[#C8A96A] mb-4">
                  <Cpu size={18} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Vanguarda Tecnológica</h4>
                <p className="text-xs text-[#E8DCCB]/75 leading-relaxed">
                  Adoção imediata de lançamentos de ponta (Gemini 3.0, Next.js 15, Genkit) sem o atrito de estruturas legadas.
                </p>
              </div>

              <div className="bg-[#1C1814] p-6 rounded-xl border border-[#2D261E]">
                <div className="w-9 h-9 rounded-lg bg-[#241F1A] flex items-center justify-center text-[#C8A96A] mb-4">
                  <Sparkles size={18} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Criando com IA</h4>
                <p className="text-xs text-[#E8DCCB]/75 leading-relaxed">
                  Fusão entre discernimento estético e estratégico humano com o poder computacional de agentes de codificação de IA.
                </p>
              </div>

              <div className="bg-[#1C1814] p-6 rounded-xl border border-[#2D261E]">
                <div className="w-9 h-9 rounded-lg bg-[#241F1A] flex items-center justify-center text-[#C8A96A] mb-4">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Padrão Industrial</h4>
                <p className="text-xs text-[#E8DCCB]/75 leading-relaxed">
                  Foco absoluto em resiliência, baixa latência e valor tangível para operações corporativas de alta exigência.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-16 bg-[#141210] border-t border-[#2D261E]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-2xl font-serif font-bold text-white mb-3">
            Quer discutir uma iniciativa ou parceria em IA?
          </h3>
          <p className="text-xs sm:text-sm text-[#E8DCCB]/80 font-light mb-6">
            Estou sempre aberto a diálogos técnicos de alto nível sobre arquiteturas emergentes e produtos inovadores.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onSelectHiggs}
              className="bg-[#C8A96A] text-[#141210] hover:bg-[#A67C3B] hover:text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              Explorar Higgs OS <ArrowRight size={15} />
            </button>
            <button
              onClick={onBackToHome}
              className="border border-[#C8A96A]/30 text-[#E8DCCB] hover:bg-[#C8A96A]/10 font-medium text-xs sm:text-sm px-6 py-3.5 rounded-sm transition-all cursor-pointer"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
