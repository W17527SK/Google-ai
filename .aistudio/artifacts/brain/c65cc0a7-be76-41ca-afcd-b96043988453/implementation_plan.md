# Plano de Implementação: Simplificação de Linguagem e Remoção de Projetos Pessoais

Este plano atende aos dois objetivos solicitados:
1. **Remover completamente os projetos pessoais** (aba "Projetos Pessoais", página do Higgs OS e todos os banners/chamadas relacionados).
2. **Substituir o jargão técnico excessivo por uma linguagem clara, humana e orientada a vendas e resultados de marketing**, mantendo os termos consagrados do mercado (Tráfego Pago, Anúncios no Meta/Google, Landing Pages, Leads, WhatsApp, Vendas, Retorno sobre Investimento).

---

### 1. Remoção Completa dos Projetos Pessoais
- **Navegação (`src/components/Navbar.tsx`)**:
  - Remover o botão "Projetos Pessoais" da barra de navegação.
  - A navegação ficará limpa e focada: **Início** e **Nossos Cases** (mais o botão de agendamento no WhatsApp).
- **Controle de Abas (`src/App.tsx`)**:
  - Remover os estados `'personal-projects'` e `'higgs'`.
  - Remover a renderização dos componentes `PersonalProjects` e `HiggsProject`.
- **Destaque no Resumo de Casos (`src/components/PortfolioSummary.tsx`)**:
  - Remover o card de destaque do "Higgs OS" no rodapé da seção.
  - O botão principal levará diretamente aos Cases de Clientes.
- **Página de Portfólio (`src/components/Portfolio.tsx`)**:
  - Remover o banner inferior promocional do "Higgs OS".
- **Limpeza de Arquivos Não Utilizados**:
  - Desativar imports dos componentes `HiggsProject.tsx` e `PersonalProjects.tsx`.

---

### 2. Simplificação da Linguagem (Sem perder o valor do Marketing)
Substituir termos excessivamente complexos ou de "engenharia/computação" por termos comerciais diretos:

- **No Hero (`src/components/Hero.tsx`)**:
  - **Tag superior**: De `"MÁQUINA DE AQUISIÇÃO PREVISÍVEL • ESTRATÉGIA & TECNOLOGIA"` para `"ESTRATÉGIA PRÁTICA • MAIS CLIENTES E MAIS VENDAS"`.
  - **Identificador**: De `"pedro-souza-os // acquisition-architecture"` para `"Painel de Vendas // Estrutura Ativa"`.
  - **Título da seção**: De `"Motor de Aquisição em Execução Contínua"` para `"Como atraímos clientes e geramos vendas todos os dias"`.
  - **Micro-provas**: De `"Infraestrutura Sob Medida"` e `"Foco Total em ROAS & LTV"` para `"Estratégia Sob Medida"` e `"Foco em Retorno Financeiro (ROI)"`.
  - **Etapa 01**: De `"Tráfego Pago de Alta Intenção"` com `"Machine Learning"` para `"Anúncios no Meta e Google"` com foco em atrair pessoas que já querem comprar.
  - **Etapa 02**: De `"Landing Pages de Alta Conversão"` focado em reuniões diretas com clareza total.
  - **Etapa 03**: De `"CRM & Fechamento Comercial"` com termos técnicos para `"Atendimento Rápido e WhatsApp"` (não deixar nenhum cliente esperando).
  - **Rodapé do console**: De `"Engenharia Orientada a Receita"` para `"Vendas Previsíveis para o seu Negócio"`.

- **Nos Serviços (`src/components/Services.tsx`)**:
  - Substituir termos de difícil compreensão ("fluxos de nutrição com trackeamento") por explicações simples: "Acompanhamento de clientes no WhatsApp", "Páginas Rápidas que Vendem", "Métricas Claras (saiba exatamente de onde veio cada venda)".

- **Nas Métricas (`src/components/Stats.tsx`)**:
  - Trocar `"Eficiência de capital"` por `"Mais vendas com menos custo"`.
  - Trocar `"Receita direta auditada"` por `"Vendas reais geradas para clientes"`.

---

### Verificação
1. Executar `lint_applet` e `compile_applet`.
2. Testar o build de produção (`npm run build`).
3. Reiniciar o servidor de desenvolvimento e verificar todas as telas no preview.
