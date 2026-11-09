import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

export default function Approach() {
  return (
    <section className="bg-brand-bege py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-brand-dourado-forte uppercase mb-4 block">Nossa abordagem</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-marrom leading-tight mb-8">
              Uma solução construída para o seu negócio — <span className="text-brand-dourado-forte italic uppercase text-3xl md:text-4xl block mt-2">não para o mercado em geral</span>
            </h2>
            <p className="text-brand-marrom-md text-lg font-light leading-relaxed mb-6">
              Não vendemos pacotes prontos. Primeiro entendemos o seu negócio, seu cliente e seu mercado. Depois montamos uma estratégia modular que combina os serviços certos para gerar resultado real.
            </p>
            <p className="text-brand-marrom-md text-lg font-light leading-relaxed mb-10">
              Mapeamos os gargalos e oportunidades do seu negócio para traçar um plano de ação claro, ágil e focado em resultados.
            </p>
            <a 
              href="https://wa.me/5511995539846?text=Olá%2C+gostaria+de+conversar+sobre+uma+estratégia+para+o+meu+negócio+%28vi+na+seção+de+Abordagem%29" 
              className="inline-block bg-brand-marrom text-brand-dourado px-8 py-4 rounded-sm font-bold text-lg hover:bg-brand-preto transition-all"
            >
              Falar com um estrategista →
            </a>
          </motion.div>

          {/* Visual Concept inspired by Figure 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-marrom p-12 rounded-2xl relative shadow-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
              <div className="text-center group">
                <div className="w-24 h-24 bg-brand-dourado/10 border border-brand-dourado/30 rounded-full flex items-center justify-center mb-4 transition-all group-hover:bg-brand-dourado/20">
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="text-brand-dourado text-sm font-bold tracking-tighter">TRÁFEGO</div>
                <div className="text-white/40 text-[10px] mt-1">Atrai visitantes</div>
              </div>
              
              <MoveRight className="text-brand-dourado hidden md:block" />

              <div className="text-center group">
                <div className="w-24 h-24 bg-brand-dourado/10 border border-brand-dourado/30 rounded-full flex items-center justify-center mb-4 transition-all group-hover:bg-brand-dourado/20">
                  <span className="text-3xl">📱</span>
                </div>
                <div className="text-brand-dourado text-sm font-bold tracking-tighter">LANDING PAGE</div>
                <div className="text-white/40 text-[10px] mt-1">Converte em leads</div>
              </div>

              <MoveRight className="text-brand-dourado hidden md:block" />

              <div className="text-center group">
                <div className="w-24 h-24 bg-brand-dourado/10 border border-brand-dourado/30 rounded-full flex items-center justify-center mb-4 transition-all group-hover:bg-brand-dourado/20">
                  <span className="text-3xl">🧭</span>
                </div>
                <div className="text-brand-dourado text-sm font-bold tracking-tighter">ESTRATÉGIA</div>
                <div className="text-white/40 text-[10px] mt-1">Orquestra o ROI</div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <div className="bg-brand-dourado/5 p-6 rounded-xl border border-brand-dourado/20">
                <p className="text-white font-medium">Quando um falha, todo o resto <span className="text-brand-dourado">perde eficiência.</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
