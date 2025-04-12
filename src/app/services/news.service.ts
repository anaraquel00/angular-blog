import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



export interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})


export class NewsService {
  navigateTo(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private newsItems: NewsItem[] = [ // Tipagem explícita
    {
      id: '1',
      title: 'O que aprender com o Framework Angular',
      content: 'Angular é um framework de desenvolvimento web que permite criar aplicações dinâmicas e responsivas. Ele é baseado em TypeScript e oferece uma série de recursos poderosos para facilitar o desenvolvimento, como a injeção de dependência, roteamento, gerenciamento de estado e muito mais. Neste artigo, vamos explorar os principais conceitos do Angular e como eles podem ser aplicados no desenvolvimento de aplicações modernas.',
      imageUrl: 'src/assets/Angular-17-600x400.png',
      category: 'Tecnologia',
      date: '2023-10-01'
    },
    // Adicione outros itens
  ];


  constructor(private router: Router) {}

  getNewsById(id: string): NewsItem | undefined {
    console.log('Buscando ID:', 'em:', this.newsItems); // Verifica o ID recebido
    const news = this.newsItems.find(item => item.id === id);
    if (!news) {
      this.router.navigate(['/']); // Agora funciona
    }
    return news;
  }

}
