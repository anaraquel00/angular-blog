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
      imageUrl: 'https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp',
      category: 'Tecnologia',
      date: '2025-04-13'
    },
    {
      id: '2',
      title: 'React.Js vs Angular: Qual é o melhor framework para o seu projeto?',
      content: 'React e Angular são dois dos frameworks mais populares para o desenvolvimento de aplicações web. Ambos têm suas vantagens e desvantagens, e a escolha entre eles pode depender de vários fatores, como o tipo de projeto, a equipe de desenvolvimento e as preferências pessoais.',
      category: 'Tecnologia',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ybY4O0j0Lm5KB7VG2lL92w.png',
      date: '2025-04-13'
    },
    {
      id: '3',
      title: 'Vue.js: O que é e como funciona?',
      content: 'Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Ele é projetado para ser adotado de forma incremental, o que significa que você pode usá-lo para adicionar interatividade a uma página existente ou construir uma aplicação complexa do zero.',
      category: 'Tecnologia',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg',
      date: '2025-04-13'
    },
    {
      id: '4',
      title: 'JavaScript: O que é e como funciona?',
      content: 'O JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ele é amplamente utilizado no desenvolvimento web para adicionar interatividade e dinamismo às páginas.',
      category: 'Tecnologia',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png',
      date: '2025-04-13'
    }
    // Adicione outros itens
  ];


  constructor(private router: Router) {}

  getNewsById(id: string): NewsItem | undefined {
    console.log('Buscando ID:', id, 'em:', this.newsItems); // Verifica o ID recebido
    const news = this.newsItems.find(item => item.id === id);
    if (!news) {
      this.router.navigate(['/']); // Agora funciona
    }
    return news;
  }

}
