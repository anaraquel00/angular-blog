import { routes } from './../../app.routes';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  templateUrl:'./big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
navigateToDetails() {
throw new Error('Method not implemented.');
}
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() category: string = '';

  constructor(private router: Router) {}

  openNews() {
    if (this.id) {
      // Navegação programática correta
      this.router.navigate(['/news', this.id]).then(success => {
        if (!success) {
          console.error('Navigation failed');
          window.location.href = `/news/${this.id}`; // Fallback
        }
      });
    }
  }
}

