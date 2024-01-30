/**
 * Produto
 *   - id (válido)
 *   - nome (2 - 250 caracteres)
 *   - preco (> 0)
 *   - desc (> 0 && < 0.8)
 *   - precoFinal
 */
class Product {
  constructor(readonly id: number, private _name: string, private price: number, private discount: number) {
    if (Number.isNaN(id) || id < 1) {
      throw new Error('Invalid ID');
    }

    if (_name.length < 2 || _name.length > 250) {
      throw new Error('Invalid name');
    }

    if (price < 0) {
      throw new Error('Invalid price');
    }

    if (discount < 0 || discount > 0.8) {
      throw new Error('Invalid discount');
    }
  }

  get name() {
    return this._name;
  }

  get priceWithDiscount() {
    return this.price * (1 - this.discount);
  }
}

const p1 = new Product(1, 'Camiseta', 50, 0.1);
console.log(`O produto ${p1.name} vai custar ${p1.priceWithDiscount} reais.`);

const p2 = new Product(2, 'Caneca', 20.0, 0.5);
console.log(`O produto ${p2.name} vai custar ${p2.priceWithDiscount} reais.`);

export {};
