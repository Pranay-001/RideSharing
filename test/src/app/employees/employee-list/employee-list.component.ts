import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  filteringEmp: any[] = [];
  experienceEmp: number = -1;
  constructor() {}
  ngOnInit(): void {}
}
