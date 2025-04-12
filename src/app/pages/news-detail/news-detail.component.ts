
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NewsService } from '../../services/news.service';


export interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="newsItem; else notFound">
      <h1>{{ newsItem.title }}</h1>
      <img [src]="newsItem.imageUrl" [alt]="newsItem.title">
      <p>{{ newsItem.content }}</p>
    </div>

    <ng-template #notFound>
      <p>Notícia não encontrada 😢</p>
      <a routerLink="/">Voltar para a home</a>
    </ng-template>
  `,



  styleUrls: ['./news-detail.component.css']
})


export class NewsDetailComponent implements OnInit {

  newsItem: NewsItem | undefined;

  constructor(
     private route: ActivatedRoute,
     private newsService: NewsService) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID da rota:', id);


}

  if (id: string) {
    this.newsItem = this.newsService.getNewsById(id);
    console.log('Notícia encontrada:', this.newsItem);
  }
  }




