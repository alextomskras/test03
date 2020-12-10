import { Component, OnInit } from '@angular/core';
import {Article} from '../model/Article';
import {ArticleServiceService} from '../service/article-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // переменные из массива
  articles: Article[];
  id: Article[];


  constructor(private articleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticlesByID(this.id);
  }

}
