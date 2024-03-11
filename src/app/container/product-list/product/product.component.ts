import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product:{ 
    id: string;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: string[];
    colors: string[];
    price: number;
    is_in_inventory: boolean;
    item_left: number;
    discount_price: number|null;
    imageUrl: string;
    slug: string;} | any

    calculateDiscountPercentage(product: any): number {
      const mainPrice = product.price;
      const discountedPrice = product.discount_price;
      return ((mainPrice - discountedPrice) / mainPrice) * 100;
    }
}
