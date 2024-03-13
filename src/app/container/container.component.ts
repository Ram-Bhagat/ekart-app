import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {


  onsearchedType:string = ""

  onSearchText(value:string){
   this.onsearchedType = value
   
  }
}
