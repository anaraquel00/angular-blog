import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule], // Importe módulos necessários (ex: NgIf, NgFor)
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
[x: string]: any;
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
}
