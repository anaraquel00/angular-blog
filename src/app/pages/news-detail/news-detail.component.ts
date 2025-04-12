
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NewsService, NewsItem } from '../../services/news.service';


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

      if (id) { // ✅ Verificação correta
        this.newsItem = this.newsService.getNewsById(id);
        console.log('Notícia encontrada:', this.newsItem);
      }
    }
  }
