import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {


  onsearchedType:string = ""

  @ViewChild('productListComp') productListComp:ProductListComponent | undefined;

  onSearchText(value:string){
   this.onsearchedType = value
   
  }
}
