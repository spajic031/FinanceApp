import { Component } from '@angular/core';
import { Year } from './year-list/years.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'financeApp';
 
  years: Year[] = [
    new Year(2022,"",8400,-2203),
    new Year(2021,"",5030,-1234),
    new Year(2020,"",6320,-2234),
    new Year(2019,"",0,0),
    
 

  ];
  
}
