export type Product = {
  name: string;
  price: number;
  discount: number;
  priceWithDiscount: () => number;
};

const product: Product = {
  name: 'Camiseta',
  price: 49.9,
  discount: 0.15,
  priceWithDiscount: function () {
    return this.price * (1 - this.discount);
  },
};

console.log(`O produto ${product.name} tem o preço de ${product.priceWithDiscount()}`);
