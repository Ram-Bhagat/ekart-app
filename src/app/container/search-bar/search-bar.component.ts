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

 searchedText(inputEl: HTMLInputElement){
  this.searchName = inputEl.value
  this.searchEvent.emit(this.searchName)
 }

}
