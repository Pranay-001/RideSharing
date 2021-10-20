import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  declarations: [AppComponent],
  imports: [EmployeesModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
