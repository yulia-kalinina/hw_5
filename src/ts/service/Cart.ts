import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  calculateTotalAmount(): number {
    const cartTotal = this.items.reduce((totalAmount, item) => {
      totalAmount += item.price;
      return totalAmount;
    }, 0);
    return cartTotal;
  }

  calculateBonusedTotalAmount(discount: number): number {
    const total: number = this.calculateTotalAmount();
    return Math.ceil(total - total * discount);
  }

  delete(id: number): Buyable[] {
    return this.items.filter((item) => item.id !== id);
  }
}
