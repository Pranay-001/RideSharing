import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-textbox',
  template: `Search: <input type="text" />`,
})
export class SearchTextBox implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
