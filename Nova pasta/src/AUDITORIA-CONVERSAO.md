# Auditoria de conversão — Casco Performance
Revisão: 8 de outubro de 2026. Base: capturas fornecidas, texto antigo, páginas oficiais dos concorrentes e checkouts informados.

## Diagnóstico
A página explica a fórmula, mas a primeira dobra anterior vendia pouco: “Conheça a fórmula. Escolha com clareza” não comunicava contexto de uso nem apresentava oferta. O caminho comercial também precisava ser direto, com quantidade e destino coerentes. Estas são hipóteses de melhoria; sem dados de tráfego e vendas não é possível afirmar o impacto na conversão.

## Mudanças implementadas
- Primeira dobra com contexto de rotina, nome do produto, kit, quantidade e preço base.
- Compra direta na Braip nos quatro kits, com URLs individuais.
- CTAs repetidos no topo, nas ofertas e após as dúvidas; barra fixa de compra no celular.
- Kits com cápsulas, porções e preço por frasco, em grade de duas colunas no desktop e uma no celular.
- Orientação de uso recuperada do material da marca, condicionada ao rótulo atualizado.
- Ajustes no posicionamento das imagens dos kits para reduzir cortes.
- Eventos locais checkout_click com kit e posição do botão. Não há integração automática com GA4, Meta ou Braip: um clique não representa checkout carregado nem venda aprovada.

## Concorrentes consultados
Não é um ranking de mercado: são referências relevantes de posicionamento e apresentação.

| Referência | Observação | Aplicação na Casco |
|---|---|---|
| [Puravida Brain Focus](https://www.puravida.com.br/brain-focus-30-caps-pv265) | Composição, modo de uso, avaliações e identificação empresarial ajudam a reduzir dúvidas. | Acrescentar rótulo completo e avaliações reais; associar alegações somente a nutrientes e condições validadas. |
| [Ocean Drop Focus Energy](https://www.oceandrop.com.br/focus-energy/p) | Compra, fórmula e modo de uso estão próximos da decisão. | Tornar a compra direta e mostrar rendimento e quantidade. |
| [Essential Nutrition Brainstorm](https://www.essentialnutrition.com.br/produtos/brainstorm) | Apresenta o produto em contextos de rotina. É uma referência adjacente, em outro formato. | Explicar conveniência das cápsulas e contexto de uso sem importar promessas do concorrente. |

Essas páginas não provam que suas escolhas de design geram mais vendas. Não copiamos avaliações, selos, números de clientes ou resultados clínicos.

## Texto antigo: o que aproveitar
Aproveitado: composição informada, duas cápsulas por porção, uso preferencial pela manhã e rendimento. A expressão “rotina exige foco” descreve o contexto do público, não comprova eficácia do produto.
Não reaproveitado sem comprovação: concentração extrema, ausência de picos ou quedas, combate à névoa mental, frete promocional de R$ 5, cupom e garantia condicionada a perceber efeitos. Política de devolução e promessa de resultado precisam ser tratadas separadamente.

## Próximas melhorias que dependem de dados reais
1. Publicar foto legível do rótulo, tabela nutricional, excipientes, alergênicos e advertências atualizadas.
2. Identificar empresa responsável e CNPJ, com políticas reais de entrega, privacidade e devolução.
3. Incluir depoimentos verificáveis e autorizados, sem extrapolar experiências individuais.
4. Validar alegações com o responsável pelo produto. Referência: [Anvisa — suplementos alimentares](https://www.gov.br/anvisa/pt-br/assuntos/alimentos/suplementos-alimentares/perguntas-frequentes/).
5. Medir sessões qualificadas, origem, dispositivo, clique por kit, checkout e pagamento aprovado. Comparar versões mantendo origem do tráfego e oferta comparáveis.

## Checkouts e preços
| Kit | Checkout | Preço base exibido |
|---|---|---|
| 1 | https://buy.braip.com/checkout/plajekdg/che6vvg1 | R$ 147,00 |
| 2 | https://buy.braip.com/checkout/plaw0k1n/che6vvg1 | R$ 267,00 |
| 3 | https://buy.braip.com/checkout/pla0xor8/che6vvg1 | R$ 357,00 |
| 6 | https://buy.braip.com/checkout/play4k6o/che6vvg1 | R$ 617,00 |
Os preços de 1 e 3 vieram da página fornecida. O checkout de 6 identifica seis unidades e parcela única base de R$ 617; o resumo exibiu R$ 586,15. No de 2 também havia diferença entre valor base e resumo. Por isso não anunciamos um desconto ou modalidade específica sem confirmação. Frete e valor final devem ser conferidos na Braip.

## Validação
Astro check e build executados. Verificação estática dos destinos dos botões. Não foi realizada validação visual em navegador nesta revisão; conferir especialmente a primeira dobra e a barra fixa em celular antes de publicar.
