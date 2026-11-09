import { motion } from "motion/react";

const steps = [
  { id: "01", title: "Diagnóstico Inicial", description: "Reunião de alinhamento para mapear seu negócio, seus gargalos e oportunidades." },
  { id: "02", title: "Plano Estratégico", description: "Entregamos um mapa completo com o direcionamento personalizado para você." },
  { id: "03", title: "Montagem Modular", description: "Escolhemos juntos os serviços que fazem sentido para o seu momento e objetivo." },
  { id: "04", title: "Execução", description: "Implementamos, lançamos e monitoramos cada ação com dados em tempo real." },
  { id: "05", title: "Otimização", description: "Ajustamos constantemente com base nos resultados para maximizar seu retorno." }
];

export default function Process() {
  return (
    <section id="processo" className="bg-brand-offwhite py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-brand-dourado-forte uppercase mb-4 block"
          >
            Processo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-marrom mb-6"
          >
            Como funciona na prática
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-marrom-md text-lg font-light"
          >
            Da análise à execução, um processo transparente e eficiente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-12 left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-brand-dourado/30 to-transparent hidden lg:block" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group relative z-10"
            >
              <div className="w-20 h-20 bg-brand-marrom text-brand-dourado rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-brand-dourado font-serif text-2xl font-bold transition-transform group-hover:scale-110">
                {step.id}
              </div>
              <h4 className="text-brand-marrom font-bold mb-4">{step.title}</h4>
              <p className="text-brand-marrom-md text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
