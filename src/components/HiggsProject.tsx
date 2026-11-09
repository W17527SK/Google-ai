import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Cpu, 
  GitBranch, 
  MessageSquare, 
  Flame, 
  Sparkles, 
  Terminal, 
  Code2,
  Zap,
  ExternalLink
} from "lucide-react";

interface HiggsProjectProps {
  onBackToHome: () => void;
  onBackToPersonalProjects?: () => void;
}

export default function HiggsProject({ onBackToHome, onBackToPersonalProjects }: HiggsProjectProps) {
  return (
    <div className="bg-[#141210] text-[#E8DCCB] min-h-screen">
      {/* Top Bar Navigation */}
      <div className="border-b border-[#2D261E] bg-[#1A1612]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBackToPersonalProjects ? (
              <button 
                onClick={onBackToPersonalProjects}
                className="flex items-center gap-2 text-[#C8A96A] hover:text-white font-medium text-sm transition-colors group cursor-pointer"
              >
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
                <span>Voltar aos Projetos Pessoais</span>
              </button>
            ) : (
              <button 
                onClick={onBackToHome}
                className="flex items-center gap-2.5 text-[#C8A96A] hover:text-white font-medium text-sm transition-colors group cursor-pointer"
              >
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
                <span>Voltar ao Início</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D261E] text-[#C8A96A] border border-[#C8A96A]/20">
              <Sparkles size={12} /> Projeto Autoral
            </span>
            <span className="hidden md:inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2D261E] text-[#E8DCCB]/80 border border-[#C8A96A]/20">
              SaaS Industrial
            </span>
            <a
              href="https://studio--projeto-flow-59592.us-central1.hosted.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C8A96A] text-[#141210] hover:bg-[#D4B77D] transition-all shadow-sm"
            >
              <span>Acessar Projeto</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 border-b border-[#2D261E]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8A96A]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241F1A] border border-[#C8A96A]/30 text-xs text-[#C8A96A] uppercase tracking-[0.25em] font-semibold mb-6"
            >
              <Cpu size={14} />
              Orquestração de Fluxos de IA Corporativa
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8"
            >
              Higgs <span className="text-[#C8A96A] font-serif italic">OS</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-2xl text-[#E8DCCB]/90 font-light leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Uma plataforma SaaS de nível industrial concebida para criar, gerenciar e orquestrar fluxos de trabalho complexos de Inteligência Artificial com execução paralela assíncrona.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm"
            >
              <a 
                href="https://studio--projeto-flow-59592.us-central1.hosted.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#C8A96A] text-[#141210] hover:bg-[#D4B77D] font-bold px-8 py-4 rounded-sm transition-all shadow-[0_0_30px_rgba(200,169,106,0.3)] hover:shadow-[0_0_40px_rgba(200,169,106,0.45)] flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Acessar Projeto Higgs</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button 
                onClick={() => {
                  const el = document.getElementById("topologia-sistema");
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-[#C8A96A]/40 text-[#E8DCCB] hover:bg-[#C8A96A]/10 font-medium px-8 py-4 rounded-sm transition-all cursor-pointer"
              >
                Ver Arquitetura Técnica
              </button>
            </motion.div>
          </div>

          {/* Interactive Architecture Flow Simulator */}
          <motion.div 
            id="topologia-sistema"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 max-w-5xl mx-auto bg-[#1C1814] rounded-2xl border border-[#2D261E] shadow-2xl p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#2D261E] gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C8A96A] font-bold block mb-1">
                  Arquitetura Visual do Sistema
                </span>
                <h3 className="text-xl font-serif text-white font-bold">
                  Topologia de Execução Higgs
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E8DCCB]/60 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Status do Kernel: Ativo & Operacional
              </div>
            </div>

            {/* Architecture Node Flowchart */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Node 1 */}
              <div className="bg-[#241F1A] border border-[#3A3127] rounded-xl p-5 relative group hover:border-[#C8A96A]/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] mb-3">
                  <MessageSquare size={16} />
                </div>
                <div className="text-[10px] uppercase font-mono text-[#C8A96A] tracking-wider mb-1">Passo 01 • Entrada</div>
                <h4 className="text-sm font-bold text-white mb-2">WhatsApp Cloud API</h4>
                <p className="text-xs text-[#E8DCCB]/70 leading-normal">
                  Recepção de webhook com payload de mensagem, áudio ou mídia.
                </p>
              </div>

              {/* Node 2 - Highlighted Entanglement */}
              <div className="bg-[#2D241C] border border-[#C8A96A]/50 rounded-xl p-5 relative group shadow-md shadow-[#C8A96A]/5">
                <div className="w-8 h-8 rounded-lg bg-[#C8A96A] flex items-center justify-center text-[#141210] mb-3">
                  <GitBranch size={16} />
                </div>
                <div className="text-[10px] uppercase font-mono text-[#C8A96A] tracking-wider mb-1">Passo 02 • Exclusivo</div>
                <h4 className="text-sm font-bold text-white mb-2">Protocolo de Emaranhamento</h4>
                <p className="text-xs text-[#E8DCCB]/80 leading-normal">
                  Execução paralela assíncrona sem filas lineares de bloqueio.
                </p>
                <div className="mt-3 flex gap-1">
                  <span className="text-[9px] bg-[#141210] text-[#C8A96A] px-2 py-0.5 rounded font-mono">Gemini 3.0</span>
                  <span className="text-[9px] bg-[#141210] text-[#C8A96A] px-2 py-0.5 rounded font-mono">GPT-5</span>
                </div>
              </div>

              {/* Node 3 */}
              <div className="bg-[#241F1A] border border-[#3A3127] rounded-xl p-5 relative group hover:border-[#C8A96A]/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] mb-3">
                  <Flame size={16} />
                </div>
                <div className="text-[10px] uppercase font-mono text-[#C8A96A] tracking-wider mb-1">Passo 03 • Análise</div>
                <h4 className="text-sm font-bold text-white mb-2">Central de Qualificação</h4>
                <p className="text-xs text-[#E8DCCB]/70 leading-normal">
                  Score de temperatura, intenção e sentimento do lead instantâneo.
                </p>
              </div>

              {/* Node 4 */}
              <div className="bg-[#241F1A] border border-[#3A3127] rounded-xl p-5 relative group hover:border-[#C8A96A]/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A] mb-3">
                  <Zap size={16} />
                </div>
                <div className="text-[10px] uppercase font-mono text-[#C8A96A] tracking-wider mb-1">Passo 04 • Saída</div>
                <h4 className="text-sm font-bold text-white mb-2">Despacho & Ação</h4>
                <p className="text-xs text-[#E8DCCB]/70 leading-normal">
                  Resposta ultrarrápida no WhatsApp e sincronização no CRM.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Tech Stack Specs */}
      <section className="py-20 border-b border-[#2D261E]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C8A96A] font-bold block mb-1">
                  Stack & Fundações
                </span>
                <h3 className="text-2xl font-serif text-white font-bold">
                  Especificações de Engenharia
                </h3>
              </div>
              <span className="text-xs text-[#E8DCCB]/60 font-mono bg-[#1C1814] px-4 py-2 rounded-md border border-[#2D261E]">
                Industrial Architecture
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-6 bg-[#1C1814] border border-[#2D261E] rounded-xl text-center">
                <Code2 className="mx-auto text-[#C8A96A] mb-2" size={24} />
                <h5 className="font-bold text-white text-sm">Next.js 15</h5>
                <span className="text-[11px] text-[#E8DCCB]/60">App Router & Server Actions</span>
              </div>
              <div className="p-6 bg-[#1C1814] border border-[#2D261E] rounded-xl text-center">
                <Cpu className="mx-auto text-[#C8A96A] mb-2" size={24} />
                <h5 className="font-bold text-white text-sm">Genkit Framework</h5>
                <span className="text-[11px] text-[#E8DCCB]/60">Orquestração Multi-Agente</span>
              </div>
              <div className="p-6 bg-[#1C1814] border border-[#2D261E] rounded-xl text-center">
                <Terminal className="mx-auto text-[#C8A96A] mb-2" size={24} />
                <h5 className="font-bold text-white text-sm">Firebase Cloud</h5>
                <span className="text-[11px] text-[#E8DCCB]/60">Firestore & Real-time State</span>
              </div>
              <div className="p-6 bg-[#1C1814] border border-[#2D261E] rounded-xl text-center">
                <MessageSquare className="mx-auto text-[#C8A96A] mb-2" size={24} />
                <h5 className="font-bold text-white text-sm">Meta Cloud API</h5>
                <span className="text-[11px] text-[#E8DCCB]/60">Webhooks WhatsApp Oficiais</span>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-[#2D261E] flex flex-wrap items-center justify-center gap-4">
              {onBackToPersonalProjects && (
                <button 
                  onClick={onBackToPersonalProjects}
                  className="border border-[#C8A96A]/40 bg-[#C8A96A]/10 text-[#E8DCCB] hover:bg-[#C8A96A]/20 font-medium text-sm px-6 py-3 rounded-sm transition-all cursor-pointer"
                >
                  ← Voltar aos Projetos Pessoais
                </button>
              )}
              <button 
                onClick={onBackToHome}
                className="border border-[#C8A96A]/20 text-[#E8DCCB]/70 hover:text-white hover:bg-[#C8A96A]/10 font-medium text-sm px-6 py-3 rounded-sm transition-all cursor-pointer"
              >
                Retornar ao Início
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
