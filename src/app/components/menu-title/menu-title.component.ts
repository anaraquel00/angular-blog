import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent {
  title = 'Blog da ANA';
  subtitle = 'Blog com o objetivo de aprender a mexer com o Angular e descobrir o que esse framework oferece!'; // Adicione o subtítulo aqui
}
