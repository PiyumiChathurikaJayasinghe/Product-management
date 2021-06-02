export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
 /*export class Product implements IProduct {
     constructor(public productId: number,
                public productName: number,
                public productCode: number,
                public releaseDate: number,
                public price: number,
                public description: number,
                public starRating: number,
                public imageUrl: number){

        }
calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
    }
}*/