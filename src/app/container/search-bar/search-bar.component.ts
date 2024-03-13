import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
 searchName:string | undefined

 @Output()
 searchEvent:EventEmitter<string> = new EventEmitter<string>()

 searchedText(value:any){
 this.searchName = value.target.value;
  this.searchEvent.emit(this.searchName)
 }

}
