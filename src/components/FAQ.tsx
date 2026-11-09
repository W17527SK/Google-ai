import { motion } from "motion/react";

const faqs = [
  { q: "Já tentei tráfego antes e não funcionou.", r: "A maioria das experiências vêm de estratégias genéricas sem análise prévia. Por isso todo projeto começa com diagnóstico — para entender o que falhou e o que vai funcionar para você." },
  { q: "Meu nicho é muito específico, não sei se funciona.", r: "Atendemos negócios de nichos variados exatamente porque desenvolvemos estratégias do zero. Se há público no digital para o seu negócio, há caminho." },
  { q: "Não tenho orçamento grande para anúncios.", r: "Trabalhamos com diferentes realidades. O diagnóstico inicial serve para apontar qual canal e formato faz sentido para o seu momento atual — com responsabilidade e foco em retorno." },
  { q: "IA na prática parece algo muito complexo.", r: "Usamos IA na nossa própria operação diariamente. Não é complexo — é processo. E você não precisa entender de tecnologia para colher os resultados." }
];

export default function FAQ() {
  return (
    <section className="bg-brand-offwhite py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-brand-dourado-forte uppercase mb-4 block"
          >
            Dúvidas comuns
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-marrom"
          >
            Respostas honestas
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-brand-bege-md"
            >
              <div className="text-brand-marrom-md text-sm italic mb-4 pb-4 border-bottom border-brand-bege-md border-b">
                "{faq.q}"
              </div>
              <p className="text-brand-marrom text-base leading-relaxed">
                {faq.r}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
