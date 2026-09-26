# Landing page Vendly — 25/09/2026

## Entrega e arquitetura

A home comercial está implementada neste repositório, com exportação estática em `out/`, para `https://vendlyapp.com.br`. O SaaS permanece no repositório irmão `vendlycopy`. A orientação vigente de `vendlycopy/DEPLOY_PRODUCTION.md` mantém o site no GitHub Pages; a topologia VPS da parte histórica desse documento não foi aplicada. DNS, hospedagem, painel, API e banco foram preservados. A publicação autorizada usa a branch `genesis`, conforme o estado final deste documento.

O link Entrar aponta para `https://painel.vendlyapp.com.br/login`. O CTA comercial usa o WhatsApp informado pelo titular: `https://wa.me/5579996063423`, com mensagem preenchida. Abrir o link não envia a mensagem automaticamente.

## Direção e conteúdo

Aplicação das skills `vendly-marketing-site` e `frontend-ui-ux-strategist`: Inter, marca oficial, branco/lavanda e roxo. As referências fornecidas orientaram hierarquia, copy, mockup de computador/celular e narrativa. Não são imagens de fundo da página: textos e controles permanecem HTML acessível e indexável.

Hipótese de público: dono de loja independente de celulares novos, seminovos e acessórios, chegando por indicação ou descoberta orgânica. Objetivo: entender a proposta, conhecer o produto e iniciar uma conversa sobre acesso. A hipótese não equivale a pesquisa com usuários.

As 14 seções cobrem apresentação, público, dores, benefícios, plataforma, vitrine, demonstração, trocas, financeiro, consultor, comparação, objeção, Genesis e FAQ/CTA final. Genesis é acesso inicial por convite. Não foram publicados preços das referências, gratuidade, avaliações, depoimentos fictícios ou garantias de aumento de lucro.

## Correspondência com o produto

Fontes inspecionadas no projeto SaaS em 25/09/2026:

| Mensagem | Evidência e limite |
| --- | --- |
| Estoque por unidade e acessórios por quantidade | Features de inventory e invariantes do SDD; não promete importação automática. |
| Vitrine, comparação, resumo e condições de pagamento | `apps/web/features/public-store` e rota `app/loja/[slug]`; condições dependem da configuração da loja. |
| Vendas com troca e fiado | Fluxos implementados de sales/receivables; preserva bem recebido, dinheiro e recebíveis como registros distintos. |
| Lucro, caixa e custo em estoque | Painel e domínio financeiro; copy distingue receita, caixa, recebíveis e resultado após custos/despesas. |
| Consultor estratégico | `apps/web/app/dashboard/strategy/page.tsx` e analytics; não promete IA generativa, decisão autônoma ou retorno garantido. |
| Entrada no Genesis | Configuração de produção por convite e destino WhatsApp confirmado pelo titular. Recursos/condições de acesso são consultados com a equipe. |

As telas mostram a implementação local atual; não atestam homologação de cada recurso no ambiente público ou em todos os planos.

## Imagens e interação

`public/brand` e favicon vieram dos assets oficiais do projeto. `public/product` contém capturas reais da interface do SaaS com fixtures sintéticas: painel em 1440×960, vitrine em 1440×960 e vitrine mobile em 390×844. Produtos, preços e números são demonstrativos; desenhos de aparelhos vêm das fixtures. Não há dados de clientes reais. Os três WebPs somam aproximadamente 241 KB.

As capturas foram produzidas em ambiente local com respostas de API simuladas, sem gravação operacional. Não existe uma integração da landing com as APIs privadas. As legendas deixam explícitos os dados de demonstração. Não foi criado vídeo nem atribuído comportamento interativo a um screenshot.

Menu mobile com fechamento por Escape/fora do menu; FAQ nativo; alternância entre duas telas; ampliação em dialog nativo com retorno de foco. Texto e FAQ funcionam sem JavaScript. A demonstração ampliada permite rolagem para preservar a leitura em telas pequenas.

## SEO e medição

Título, descrição, canonical no domínio principal, Open Graph, Twitter Card, robots, sitemap e JSON-LD de Organization/SoftwareApplication. Não foi adicionado rating nem oferta sem evidência. O HTML principal é exportado no build.

Eventos `contact_cta_clicked`, `feature_demo_selected`, `faq_opened` e `pricing_viewed` são apenas `CustomEvent` locais sob `vendly:marketing`. São pontos de integração, sem SDK, cookies, identificadores, armazenamento ou coletor de analytics. Para medir conversão real será necessário escolher e conectar o destino de medição.

## Validação

- `npm run build`: passou, incluindo TypeScript e exportação estática.
- `npm run lint`: zero erros; três warnings pré-existentes em `src/components/logo.tsx`, `pillars.tsx` e `value-card.tsx`, fora da nova landing.
- `scripts/verify-marketing.cjs`: prévia estática validada em 320, 390, 768, 1440 e 1920 px; sem overflow horizontal. Conferiu links/âncoras, menu, Escape, FAQ, demonstração, ampliação/retorno de foco, eventos locais, ausência de cookies e conteúdo sem JavaScript. Zero erros de página e zero recursos HTTP quebrados na execução.
- Revisão visual de hero desktop/mobile e seções de vitrine, troca, financeiro e Genesis. Capturas e resultados estão em `outputs/marketing` (ignorado pelo Git).
- `robots.txt` e `sitemap.xml` exportados apontam para o apex correto.

Os scripts usam Playwright disponível no ambiente; não foi adicionada dependência de runtime ao site. Para reproduzir, instalar/disponibilizar Playwright no ambiente de desenvolvimento, definir `NODE_PATH` se necessário, servir `out/` e usar `PREVIEW_URL` com a URL local.

### Amostra de performance local

`scripts/measure-marketing.cjs`: Chrome em 390×844, cache frio, CPU 4×, download 1,6 Mbps e latência de 150 ms, servindo a exportação por Python sem compressão. Amostra: LCP 3.336 ms (imagem), soma de layout shifts 0, aproximadamente 878 KB transferidos na carga inicial. O navegador apresentou injeção do antivírus Kaspersky local, uma interferência do ambiente que não é dependência do site. Esses números são diagnósticos de laboratório, não Core Web Vitals de produção. INP não foi medido; requer interações representativas/dados reais. Validar novamente após publicação com cache/CDN e compressão reais.

## Estado final

Implementação revisada localmente. A etapa inicial não publicou o site. Em seguida, o titular autorizou organizar e disparar a publicação pela branch `genesis`, sem aguardar seu resultado. O workflow e a política do environment `github-pages` passam a usar essa branch, preservando o apex `vendlyapp.com.br` no GitHub Pages. O sucesso do deploy deve ser conferido no Actions; não é presumido pelo envio do commit.

Confirmação da oferta comercial futura, prova social autorizada e conexão de um coletor de analytics continuam fora desta entrega. Nenhuma dessas lacunas foi preenchida com promessas inventadas na página.
