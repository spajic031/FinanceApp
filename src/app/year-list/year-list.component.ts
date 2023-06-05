import { Component, OnInit, Input, } from '@angular/core';
import { Year } from './years.model';
/* import { MainComponent } from './main/main.component'; */



@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css']
})
export class YearListComponent implements OnInit {
  currentIndex: number = 1;
  @Input() years: any[] = [];
  
  /* @ViewChild(MainComponent) childComponent: MainComponent; */
  
  
 

  constructor() {}

  ngOnInit(): void {
  }
  
clickEvent(event:any){
  let target = event.currentTarget.children[0];
  target.classList.toggle("bgGreen"); 
  console.log(this.currentIndex)
  
}

divIndex(i:number){
  
  this.currentIndex = i;
}

newYear(){
  //TEST
  this.years.unshift(new Year(0,"",0,0));
}


}
