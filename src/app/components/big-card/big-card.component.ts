import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  router: any;

openNews() {
  this.router.navigate(['/news', this.id]);
    console.log('Navegando para:', this.id); // Para debug
throw new Error('Method not implemented.');
}
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() category: string = '';
}
