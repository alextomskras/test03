import { Injectable } from '@angular/core';
import {Article} from '../model/Article';
import {TestData} from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }

  getArticles(): Article[] {
    return TestData.articles;
  }

  getArticlesByID(id: Article[]): Article[] {
    // tslint:disable-next-line:no-shadowed-variable

    // @ts-ignore
    return TestData.articles.filter(article => article.id === id);
  }
}
