import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  title: string;
  people: any[];
  constructor() {
    this.title = '';
    this.people = [];
  }

  ngOnInit(): void {
    this.title = 'Employees';
    this.people = [
      {
        id: '1',
        name: 'John',
        city: 'San Francisco',
        exp: 3,
        joined: new Date(2013, 3, 13),
      },
      {
        id: '2',
        name: 'Jenny',
        city: 'Los Angeles',
        exp: 4,
        joined: new Date(2012, 4, 19),
      },
      {
        id: '3',
        name: 'Ben',
        city: 'Texas',
        exp: 1,
        joined: new Date(2015, 10, 23),
      },
      {
        id: '4',
        name: 'Becky',
        city: 'FreeLand',
        exp: 6,
        joined: new Date(2010, 12, 1),
      },
      {
        id: '5',
        name: 'kilye',
        city: 'Berlin',
        exp: 1,
        joined: new Date(2015, 2, 23),
      },
    ];
  }
}
