import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },       // Home com menus
  { path: 'news/:id', component: NewsDetailComponent }, // Detalhes com menus
  { path: '**', redirectTo: '' } // Rota curinga para 404
];
