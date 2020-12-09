import {Component, Input, OnInit} from '@angular/core';
import {Articles} from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() article: Articles[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
