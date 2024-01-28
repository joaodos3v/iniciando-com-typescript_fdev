type Product = {
  name: string;
  price: number;
  discount: number;
  priceWithDiscount: () => number;
};

const product: Product = {
  name: 'Caneta',
  price: 15.95,
  discount: 0.1,
  priceWithDiscount: function () {
    return this.price * (1 - this.discount);
  },
};

console.log(product.name);
console.log(product.price);
console.log(product.discount);
console.log(product.priceWithDiscount());
