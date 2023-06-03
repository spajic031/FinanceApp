import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { YearListComponent } from './year-list/year-list.component';
import { MainComponent } from './year-list/main/main.component';
import { YearComponent } from './year-list/year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YearListComponent,
    MainComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
