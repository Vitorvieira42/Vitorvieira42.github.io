# Portfólio

Site pessoal de portfólio: https://vitorvieira42.github.io

## O que tem aqui

Uma página estática com dois projetos documentados pelos números que o próprio código produz:

| Projeto | O que faz | Where |
| --- | --- | --- |
| Console de Automação de Identidade | Estado desejado de Active Directory, diff, geração de PowerShell, fila de requisições com reversão e auditoria em cadeia | [repositório](https://github.com/Vitorvieira42/console-automacao-identidade) · [demo](https://vitorvieira42.github.io/console-automacao-identidade/) |
| Controle de Estoque de Padaria | Cadastro, movimentações por motivo, alertas de validade e dashboard com seis KPIs e cinco gráficos encadeados | [repositório](https://github.com/Vitorvieira42/controle-estoque-padaria) · [demo](https://vitorvieira42.github.io/controle-estoque-padaria/) |

## Como é feito

- **Sem build.** Três arquivos: `index.html`, `styles.css`, `site.js`. Nenhum `npm install`, nenhum bundler.
- **Sem dependência externa.** Fontes do sistema, sem CDN e sem requisições de rede.
- **Tema claro e escuro** persistidos em `localStorage` sob a chave `portfolio.tema`, com respeito a `prefers-color-scheme` e `prefers-reduced-motion`.
- **Números verificáveis.** Toda métrica exibida vem de contagem real no código ou de execução da demonstração, e os dados mostrados nos projetos são sintéticos e declarados como tal na página.

## Apresentação

`slides/controle-estoque-padaria.pptx` é o deck de 10 páginas do projeto de estoque, editável no PowerPoint. Ele fica aqui, e não no repositório do app, porque é material de apresentação.

## Rodar localmente

Abrir `index.html` direto no navegador já funciona. Se preferir um servidor:

```sh
python -m http.server 8080
```
