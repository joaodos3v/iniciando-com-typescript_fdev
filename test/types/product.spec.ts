import { Product } from '../../src/types/product';

test('should render correct price with discount', () => {
  const product: Product = {
    name: 'Camiseta',
    price: 49.9,
    discount: 0.15,
    priceWithDiscount: function () {
      return this.price * (1 - this.discount);
    },
  };

  expect(product.priceWithDiscount()).toBe(42.415);
});
