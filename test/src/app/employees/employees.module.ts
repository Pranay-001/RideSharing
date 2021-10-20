import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SearchTextBox } from './employee-list/search-textbox.compenent';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesComponent, EmployeeListComponent, SearchTextBox],
  exports: [EmployeesComponent],
})
export class EmployeesModule {}
