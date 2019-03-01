import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HoursCalculatorComponent } from './hours-calculator/hours-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HoursCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
