import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenuTitleComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bigCardData = {
    id: '1',
    title: 'O que aprender com o Framework Angular',
    description: 'Angular é um framework de desenvolvimento web que permite criar aplicações dinâmicas e responsivas. Ele é baseado em TypeScript e oferece uma série de recursos poderosos para facilitar o desenvolvimento, como a injeção de dependência, roteamento, gerenciamento de estado e muito mais. Neste artigo, vamos explorar os principais conceitos do Angular e como eles podem ser aplicados no desenvolvimento de aplicações modernas.',
    category: 'Tecnologia',
    imageUrl: 'https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp'
  };

  smallCardsData = [
    {
      id: '2',
      title: 'React.Js vs Angular: Qual é o melhor framework para o seu projeto?',
      description: 'React e Angular são dois dos frameworks mais populares para o desenvolvimento de aplicações web. Ambos têm suas vantagens e desvantagens, e a escolha entre eles pode depender de vários fatores, como o tipo de projeto, a equipe de desenvolvimento e as preferências pessoais.',
      category: 'Tecnologia'
    },
    {
      id: '3',
      title: 'Vue.js: O que é e como funciona?',
      description: 'Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Ele é projetado para ser adotado de forma incremental, o que significa que você pode usá-lo para adicionar interatividade a uma página existente ou construir uma aplicação complexa do zero.',
      category: 'Tecnologia'
    },
    {
      id: '4',
      title: 'JavaScript: O que é e como funciona?',
      description: 'O JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ele é amplamente utilizado no desenvolvimento web para adicionar interatividade e dinamismo às páginas.',
      category: 'Tecnologia'
    }
  ];
}
