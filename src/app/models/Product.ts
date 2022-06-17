export class Product {
  public id: string ;
  public title: string;
  public price: number;
  public quantity: number;
  public like: number;


  constructor(id: string, title: string, price: number, quantity: number, like: number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.like = like;
  }
}
