import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  Activity, 
  Sparkles, 
  Layers, 
  Globe, 
  Target, 
  ShieldCheck,
  BarChart3
} from "lucide-react";

export default function Hero() {
  const [activeEngineTab, setActiveEngineTab] = useState<'overview' | 'traffic' | 'conversion' | 'crm'>('overview');

  return (
    <section className="relative bg-[#0F0D0B] text-white pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden border-b border-[#241F1A]">
      {/* Silicon Valley Ambient Light & Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial glow centered at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(200,169,106,0.12),transparent_70%)]" />
        
        {/* Precision micro-grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Hero Header Area */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
          {/* Silicon Valley Category Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1612]/90 border border-[#C8A96A]/30 text-[#C8A96A] text-[11px] font-mono tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-pulse" />
            <span>MÁQUINA DE AQUISIÇÃO PREVISÍVEL • ESTRATÉGIA & TECNOLOGIA</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-8"
          >
            Seu negócio gerando vendas todos os dias com{" "}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#E8DCCB] to-[#C8A96A] bg-clip-text text-transparent italic">
              estratégia e tecnologia
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#E8DCCB]/85 font-light leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Unimos tráfego pago, Landing Pages e CRM para criar uma máquina de aquisição personalizada para o seu negócio.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://wa.me/5511995539846?text=Olá%2C+gostaria+de+agendar+uma+sessão+estratégica+com+a+Delivery+Grow"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#C8A96A] text-[#0F0D0B] hover:bg-[#D4B77D] font-semibold text-sm tracking-wide transition-all shadow-[0_0_35px_rgba(200,169,106,0.25)] hover:shadow-[0_0_45px_rgba(200,169,106,0.35)]"
            >
              <span>Falar com um Estrategista</span>
              <ArrowUpRight size={16} />
            </a>

            <a 
              href="#processo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#181410] border border-[#2D261E] hover:border-[#C8A96A]/50 text-[#E8DCCB] hover:text-white font-medium text-sm transition-all"
            >
              <span>Ver Como Funciona</span>
              <span className="text-[#C8A96A]">↓</span>
            </a>
          </motion.div>

          {/* Micro Trust Proofs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#E8DCCB]/60 font-mono"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#C8A96A]" />
              <span>Metodologia Validada</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#C8A96A]" />
              <span>Infraestrutura Sob Medida</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-[#C8A96A]" />
              <span>Foco Total em ROAS & LTV</span>
            </div>
          </motion.div>
        </div>

        {/* Silicon Valley Enterprise Growth Engine Terminal Display */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto rounded-2xl bg-[#14110E] border border-[#2D261E] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-[#1C1814]/90 border-b border-[#2D261E] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3D3328]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#524434]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8A96A]/60" />
              </div>
              <div className="h-4 w-[1px] bg-[#2D261E] mx-1" />
              <span className="font-mono text-xs text-[#E8DCCB]/70 tracking-wider">
                delivery-grow-os // acquisition-architecture
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#241F1A] border border-[#C8A96A]/20 text-[#C8A96A]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Pipeline Ativo
              </span>
              <span className="text-[#E8DCCB]/50 hidden sm:inline">v4.2 Enterprise</span>
            </div>
          </div>

          {/* Engine Dashboard Workspace */}
          <div className="p-6 sm:p-8">
            {/* Top Navigation Bar inside Cockpit */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#241F1A]">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#C8A96A] font-bold font-mono mb-1">
                  Arquitetura de Vendas Integrada
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Motor de Aquisição em Execução Contínua
                </h3>
              </div>

              {/* View Selector Pills */}
              <div className="flex items-center gap-1 bg-[#1A1612] p-1 rounded-lg border border-[#2D261E]">
                <button
                  onClick={() => setActiveEngineTab('overview')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    activeEngineTab === 'overview'
                      ? 'bg-[#C8A96A] text-[#0F0D0B] font-bold shadow-sm'
                      : 'text-[#E8DCCB]/70 hover:text-white'
                  }`}
                >
                  Visão Geral
                </button>
                <button
                  onClick={() => setActiveEngineTab('traffic')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    activeEngineTab === 'traffic'
                      ? 'bg-[#C8A96A] text-[#0F0D0B] font-bold shadow-sm'
                      : 'text-[#E8DCCB]/70 hover:text-white'
                  }`}
                >
                  1. Tráfego
                </button>
                <button
                  onClick={() => setActiveEngineTab('conversion')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    activeEngineTab === 'conversion'
                      ? 'bg-[#C8A96A] text-[#0F0D0B] font-bold shadow-sm'
                      : 'text-[#E8DCCB]/70 hover:text-white'
                  }`}
                >
                  2. Conversão
                </button>
                <button
                  onClick={() => setActiveEngineTab('crm')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    activeEngineTab === 'crm'
                      ? 'bg-[#C8A96A] text-[#0F0D0B] font-bold shadow-sm'
                      : 'text-[#E8DCCB]/70 hover:text-white'
                  }`}
                >
                  3. CRM
                </button>
              </div>
            </div>

            {/* 3 Interlocking Core Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Module 1: Tráfego */}
              <div className={`p-6 rounded-xl border transition-all ${
                activeEngineTab === 'traffic' || activeEngineTab === 'overview'
                  ? 'bg-[#1C1814] border-[#C8A96A]/40 shadow-lg'
                  : 'bg-[#161310] border-[#241F1A] opacity-70'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#241F1A] border border-[#3A3127] flex items-center justify-center text-[#C8A96A]">
                    <Target size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-[#C8A96A] px-2 py-0.5 rounded bg-[#C8A96A]/10 border border-[#C8A96A]/20">
                    ETAPA 01
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Tráfego Pago de Alta Intenção</h4>
                <p className="text-xs text-[#E8DCCB]/70 mb-4 leading-relaxed font-light">
                  Meta Ads e Google Ads calibrados para atrair decisores prontos para comprar, eliminando desperdício de verba.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#2D261E] font-mono text-xs">
                  <div className="flex justify-between text-[#E8DCCB]/80">
                    <span>ROAS Médio:</span>
                    <span className="text-emerald-400 font-bold">3.8x — 5.2x</span>
                  </div>
                  <div className="flex justify-between text-[#E8DCCB]/80">
                    <span>Otimização:</span>
                    <span className="text-[#C8A96A]">Machine Learning</span>
                  </div>
                </div>
              </div>

              {/* Module 2: Landing Pages */}
              <div className={`p-6 rounded-xl border transition-all ${
                activeEngineTab === 'conversion' || activeEngineTab === 'overview'
                  ? 'bg-[#1C1814] border-[#C8A96A]/40 shadow-lg'
                  : 'bg-[#161310] border-[#241F1A] opacity-70'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#241F1A] border border-[#3A3127] flex items-center justify-center text-[#C8A96A]">
                    <Zap size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-[#C8A96A] px-2 py-0.5 rounded bg-[#C8A96A]/10 border border-[#C8A96A]/20">
                    ETAPA 02
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Landing Pages de Alta Conversão</h4>
                <p className="text-xs text-[#E8DCCB]/70 mb-4 leading-relaxed font-light">
                  Estruturas ultrarrápidas, copywriting persuasivo e design de altíssimo impacto focado em transformar cliques em reuniões.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#2D261E] font-mono text-xs">
                  <div className="flex justify-between text-[#E8DCCB]/80">
                    <span>Taxa Conversão:</span>
                    <span className="text-[#C8A96A] font-bold">12% a 18%</span>
                  </div>
                  <div className="flex justify-between text-[#E8DCCB]/80">
                    <span>Carregamento:</span>
                    <span className="text-emerald-400 font-bold">&lt; 0.8s</span>
                  </div>
                </div>
              </div>

              {/* Module 3: CRM & Automações */}
              <div className={`p-6 rounded-xl border transition-all ${
                activeEngineTab === 'crm' || activeEngineTab === 'overview'
                  ? 'bg-[#1C1814] border-[#C8A96A]/40 shadow-lg'
                  : 'bg-[#161310] border-[#241F1A] opacity-70'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#241F1A] border border-[#3A3127] flex items-center justify-center text-[#C8A96A]">
                    <Layers size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-[#C8A96A] px-2 py-0.5 rounded bg-[#C8A96A]/10 border border-[#C8A96A]/20">
                    ETAPA 03
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">CRM & Fechamento Comercial</h4>
                <p className="text-xs text-[#E8DCCB]/70 mb-4 leading-relaxed font-light">
                  Roteamento ágil para WhatsApp, acompanhamento automático e qualificação de oportunidade sem perda de timing.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#2D261E] font-mono text-xs">
                  <div className="flex justify-between text-[#E8DCCB]/80">
                    <span>Tempo de Resposta:</span>
                    <span className="text-emerald-400 font-bold">&lt; 1 minuto</span>
                  </div>
                  <div className="flex justify-between text-[#E8DCCB]/80">
                    <span>Nutrição:</span>
                    <span className="text-[#C8A96A]">100% Automatizada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Real-time Telemetry Bar */}
            <div className="p-4 rounded-xl bg-[#171310] border border-[#262019] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E8DCCB]/70">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  <strong className="text-white font-semibold">SISTEMA INTEGRADO:</strong> Do primeiro clique ao fechamento contratual em fluxo contínuo
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span>Engenharia Orientada a Receita</span>
                <span className="text-[#C8A96A]">Escala Sob Medida</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

