import { Component, OnInit, Input } from '@angular/core';
import { Year } from '../years.model';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() years: any[] = [];
  @Input() currentIndex:any;
  idx:any = 0;
  
  
  constructor() {
    
   }
  ngOnInit(): void {
    console.log(this.currentIndex);
    console.log(this.years)
    
  }
  listClick(){
    alert(this.currentIndex);
  }
  //proba
 
 
  proba(i:number){
    
    this.idx = i;
    console.log(this.idx)
    
    this.years[this.currentIndex].months[this.idx].spend = 3000;
    /* this.years.unshift(new Year(2222,"",3000,21312)); */


    

  }
}
