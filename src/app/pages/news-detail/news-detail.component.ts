
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NewsService, NewsItem } from '../../services/news.service';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})


export class NewsDetailComponent implements OnInit {

    voltarParaHome() {
    this.router.navigate(['/']); // Navega para a rota raiz
    // Alternativa com histórico:
    window.history.back(); // Volta para a página anterior
  }

  newsItem: NewsItem | undefined;

  constructor(
     private route: ActivatedRoute,
     private newsService: NewsService,
     private router: Router) {}


     ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      console.log('ID:', id);

      if (id) { // ✅ Verificação correta
        this.newsItem = this.newsService.getNewsById(id);
        console.log('Dados completos:', JSON.stringify(this.newsItem));
      }
    }
  }
