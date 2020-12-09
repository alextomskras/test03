import { Component } from '@angular/core';
// модель данных
export interface Articles {
  id: number;
  header: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Article list';

  public article: Articles [] = [
    {id: 1, header: 'тыц1', description: 'tutu1'},
    {id: 2, header: 'тыц2', description: 'tutu2'},
  ];
}
