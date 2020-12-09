import {Component, Input, OnInit} from '@angular/core';
import {Articles} from '../app.component';
import {ArticleServiceService} from '../service/article-service.service';
import {Article} from '../model/Article';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() article: Articles[] = [];

  // переменные из массива
  articles: Article[];

  constructor(private articleService: ArticleServiceService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.articles = this.articleService.getArticles();
  }

}
