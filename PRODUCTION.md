# Produção da página comercial

A landing continua neste repositório e no GitHub Pages. O SaaS usa outro
repositório e outra infraestrutura; esta publicação não altera API, painel ou Labs.

## Deploy

Push em `main` executa instalação limpa (`npm ci`), auditoria de dependências de
produção (bloqueia HIGH/CRITICAL), typecheck, build/export e validação do artefato.
Somente depois o job com permissões `pages:write`/`id-token:write` publica `out/`.
Pull requests executam os gates, sem publicar. Não há Node/Next server no Pages.

## Dependências

Em 18/09/2026, Next.js e eslint-config-next foram atualizados de 16.2.6 para
16.3.5; dependências transitivas foram atualizadas dentro dos intervalos declarados.
`shadcn` é ferramenta/CSS de build e pertence a devDependencies. Nenhum `audit
fix --force` foi usado. O lockfile atualizado passou auditoria com zero achados.

## DNS e HTTPS

- `vendlyapp.com.br`: quatro A oficiais do Pages, 185.199.108.153,
  185.199.109.153, 185.199.110.153 e 185.199.111.153, DNS only.
- `www`: CNAME `llucaslleandro.github.io`, DNS only; redireciona para o apex.
- GitHub Pages vinculado a `vendlyapp.com.br`, domínio verificado e HTTPS obrigatório.
- Certificado aprovado em 18/09/2026 para apex/www, vencimento 17/12/2026.
- Verificados: HTTPS apex 200, www 301 para apex, HTTP 301 para HTTPS.

Os A antigos 13.248.243.5 e 76.223.105.230 foram removidos com autorização,
pois conflitavam com o Pages e havia respostas 522 intermitentes. Eram proxied
com TTL Auto. Esses valores são registro de reversão, não configuração desejada.
Registros MX/SPF/DKIM/DMARC não foram alterados.

## Rollback e verificação

Reverter o commit defeituoso e publicar novamente pelo mesmo workflow; não
remover o domínio para rollback de conteúdo. Não publicar versão com falhas de
segurança conhecidas apenas para restaurar conteúdo antigo.

Conferir HTTPS e redirecionamentos após cada deploy. Certificados, credenciais e
arquivos .env nunca pertencem ao repositório nem ao artefato estático.
