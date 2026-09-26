export const site = {
  url: "https://vendlyapp.com.br",
  login: "https://painel.vendlyapp.com.br/login",
  contact: "https://wa.me/5579996063423?text=" + encodeURIComponent("Olá! Quero conhecer o Vendly e participar da fase Genesis com minha loja."),
  cta: "Quero conhecer o Vendly",
};

export const questions = [
  { id: "cadastro", question: "Vai dar trabalho cadastrar tudo?", answer: "Você começa pelo que faz parte da sua operação: cadastra o modelo, a condição, o custo e o preço dos aparelhos. Smartphones ficam organizados por unidade; acessórios, por quantidade. O cadastro inicial exige atenção, mas passa a ser a base para estoque, vendas e vitrine." },
  { id: "troca", question: "Serve para seminovos, troca e fiado?", answer: "Sim. O Vendly tem fluxos para aparelhos novos e seminovos, vendas com troca, upgrade e downgrade. Nas vendas fiadas, você acompanha os valores a receber e registra os recebimentos, mantendo o caixa separado do que ainda vai entrar." },
  { id: "precos", question: "Meus preços mudam toda hora. E agora?", answer: "Você mantém o controle do preço no cadastro do produto e escolhe o que fica publicado na vitrine. Ajuste os valores quando sua operação pedir e confira as condições exibidas. A vitrine consulta as informações publicadas da loja; a decisão de preço continua sendo sua." },
  { id: "whatsapp", question: "Preciso mudar meu jeito de vender pelo WhatsApp?", answer: "Não. A vitrine ajuda o cliente a conhecer os aparelhos, comparar opções e simular condições antes de conversar com sua loja. O atendimento e a negociação continuam com você." },
  { id: "mobile", question: "Posso usar no celular?", answer: "Sim. O Vendly funciona pelo navegador, com telas adaptadas para celular e computador. Você precisa de conexão com a internet para acessar e atualizar as informações da loja." },
  { id: "genesis", question: "Como faço para começar?", answer: "Nesta fase Genesis, o acesso é por convite. Fale com a equipe pelo WhatsApp para conhecer o produto, tirar dúvidas e consultar as condições de entrada. Se você já tem acesso, use o botão Entrar." },
];

export const demos = [
  { id: "dashboard", label: "Resumo da loja", image: "/product/dashboard.webp", title: "O que vendeu. O que ganhou. O que precisa resolver.", text: "Veja vendas, lucro, valor em produtos e pendências no mesmo painel, sem tratar faturamento como dinheiro disponível.", alt: "Painel real do Vendly com resumo de vendas, lucro, estoque e pendências, preenchido com dados de demonstração." },
  { id: "storefront", label: "Vitrine digital", image: "/product/storefront.webp", title: "Seu estoque também trabalha na hora de apresentar.", text: "Aparelhos, acessórios, disponibilidade e condições organizados para o cliente conhecer melhor antes de falar com a loja.", alt: "Vitrine real do Vendly com filtros e produtos de demonstração." },
];
