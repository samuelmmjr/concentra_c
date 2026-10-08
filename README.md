# Casco Performance — modelo educativo em Astro

Landing page responsiva, estática, em português, com assets locais e sem dependência de serviços externos para renderizar.

## Rodar localmente

Instale Node.js 22.12 ou superior (recomendado: Node 24 LTS).

```bash
npm ci
npm run dev
```

Abra http://localhost:4321. Para acessar pela rede: `npm run dev -- --host 0.0.0.0`.

## Build de produção

```bash
npm run build
npm run preview
```

O conteúdo de `dist/` pode ser enviado a uma hospedagem estática. Não exige servidor Node em produção. O build executa checagem de tipos antes de compilar.

## Onde editar

- `src/data/product.ts`: composição, preços, checkout de cada kit, contato e dados do fabricante.
- `src/pages/index.astro`: títulos, conteúdo, FAQ e estrutura.
- `src/styles/global.css`: identidade visual e responsividade.
- `src/components/ProductVisual.astro`: apresentação dos frascos.
- `public/images/`: imagens da marca e do produto obtidas do site fornecido.

## Estado da entrega

Projeto pronto para desenvolvimento e apresentação. Checkout não foi fornecido: os botões dos kits abrem o WhatsApp do suporte informado nas capturas, com mensagem do kit e preço. Não processa pagamentos nem registra pedidos. Ao preencher `checkout` com a URL HTTPS real de cada kit, os botões passam a comprar diretamente. Confirme a titularidade do contato antes de publicar.

Valores transcritos: 1 frasco R$147; 2 frascos R$267; 3 frascos R$357. Não há parcelamento, frete promocional, cupom obrigatório, depoimentos, certificações ou alegações de eficácia inventados. Preço unitário é calculado a partir do total. Composição corresponde às capturas, não a uma validação do rótulo ou de regularização.

## Antes de publicar

1. Confirmar preços, frete, checkout, telefone e email.
2. Conferir quantidades, porção, público indicado, lista de ingredientes, excipientes e advertências com o rótulo oficial. Inserir `labelUrl` para exibir o link do documento.
3. Preencher fabricante e CNPJ em `product.ts`; incorporar dados de regularização verificáveis, políticas de entrega/devolução e privacidade adequadas à operação real. `registration` está reservado para informação confirmada, sem selo automático.
4. Validar os textos sobre o suplemento com o responsável técnico. A página deliberadamente não promete resultados clínicos ou "energia sem picos".
5. Definir domínio final, canonical, imagem social e política de indexação do ambiente de teste.

## Medição

Os links importantes disparam `casco:analytics` no `window`, com `detail.event` e `detail.kit`. Eventos: `hero_offer`, `hero_nav_offer`, `purchase_contact`, `begin_checkout` (quando houver URL), `label_contact`, `support_contact`.

```js
window.addEventListener('casco:analytics', ({ detail }) => {
  // Enviar para a ferramenta escolhida após aplicar a política de consentimento.
  console.log(detail);
});
```

Nenhum serviço de rastreamento é carregado. Compra aprovada deve ser medida no checkout ou por webhook; um clique não é venda.

## Decisões de produto

Composição vem antes da oferta. Três kits em ordem crescente; destaque baseado no menor preço unitário, sem afirmar "mais vendido". Atendimento é opcional e nenhum formulário impede a decisão. Conteúdo legível no HTML gerado, FAQ nativo, navegação por teclado, skip link e respeito à preferência de movimento reduzido.
