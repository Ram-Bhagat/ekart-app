import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product:Product| undefined

    calculateDiscountPercentage(product: any): number {
      const mainPrice = product.price;
      const discountedPrice = product.discount_price;
      return ((mainPrice - discountedPrice) / mainPrice) * 100;
    }
}
