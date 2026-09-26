# Vendly — site comercial legado

> **Migrado em 26/09/2026.** O código ativo está no monorepo
> [vendly, em apps/marketing, branch genesis](https://github.com/llucaslleandro/vendly/tree/genesis/apps/marketing).
> A LP de [vendlyapp.com.br](https://vendlyapp.com.br) é publicada na Cloudflare
> pelo workflow `Marketing` desse monorepo. O workflow GitHub Pages deste
> repositório foi desativado. O último artefato permanece temporariamente
> disponível para clientes com DNS antigo em cache; não recebe novas publicações.
> Este repositório conserva o histórico e não deve receber desenvolvimento novo.

As instruções abaixo documentam o ambiente anterior à migração.

Landing page mobile first do Vendly, em Next.js App Router, React, TypeScript e Tailwind, com exportação estática para GitHub Pages.

## Domínios e publicação

- `vendlyapp.com.br`: esta LP.
- `www.vendlyapp.com.br`: redirecionamento para o domínio principal.
- `painel.vendlyapp.com.br`: sistema do lojista, mantido no repositório SaaS.
- `vitrine.vendlyapp.com.br`, `api.vendlyapp.com.br` e `labs.vendlyapp.com.br`: serviços separados, não publicados por este projeto.

A branch de trabalho e deploy é **`genesis`**. Push nela inicia os gates e a publicação pelo workflow `Deploy to GitHub Pages`. Pull requests para `genesis` executam somente validação. Consulte [produção](PRODUCTION.md) e [registro da LP](docs/marketing-landing.md).

## Desenvolvimento

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm audit --omit=dev --audit-level=high
npm run build
```

O build verifica TypeScript e gera `out/`. Como o projeto usa exportação estática, a prévia de produção deve servir essa pasta:

```sh
python -m http.server 3321 --bind 127.0.0.1 --directory out
```

## Organização

- `src/app/page.tsx`: narrativa e seções da LP.
- `src/features/marketing`: copy centralizada, links, componentes e interações.
- `src/app/globals.css`: identidade e responsividade.
- `src/app/layout.tsx`, `robots.ts`, `sitemap.ts`: metadados e descoberta.
- `public/brand`: marca oficial.
- `public/product`: capturas reais com dados sintéticos de demonstração.
- `scripts/verify-marketing.cjs`: verificação de navegação, responsividade e interações com Playwright disponível no ambiente de desenvolvimento.
- `scripts/measure-marketing.cjs`: medição local de performance, sem equivalência a métricas de campo.

O destino WhatsApp fica em `src/features/marketing/content.ts`. Eventos locais de marketing ainda não possuem um coletor conectado. Credenciais e dados operacionais não pertencem ao site ou ao artefato publicado.
