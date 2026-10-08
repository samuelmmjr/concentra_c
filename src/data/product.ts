// Dados transcritos das capturas. Validar com o rótulo atual antes de publicar.
export const product = {
 name: 'Concentra C', capsules: 60, serving: '2 cápsulas',
 email: 'suporte@cascoperformance.com.br', whatsapp: '5569992734388',
 labelUrl: '', manufacturer: '', cnpj: '', registration: '',
 // Preencha com URLs HTTPS do checkout para ativar a compra direta.
 kits: [
  { count: 1, name: 'Conheça o produto', total: 147, checkout: '' },
  { count: 2, name: 'Sua rotina, em dobro', total: 267, checkout: '' },
  { count: 3, name: 'Menor preço por frasco', total: 357, checkout: '' },
 ],
 ingredients: [
  ['Cafeína', '75 mg'], ['Coenzima Q10', '30 mg'], ['L-Tirosina', '200 mg'],
  ['L-Triptofano', '100 mg'], ['Fosfatidilserina', '30 mg'], ['Colina', '100 mg'],
  ['Magnésio', '150 mg'], ['Vitamina B3', '30 mg'], ['Vitamina D3', '50 µg'], ['Vitamina B12', '4,8 µg'],
 ],
};
export const money = (n: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);
export const contact = (message: string) => `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`;
