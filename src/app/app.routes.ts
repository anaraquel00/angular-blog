import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

export const routes: Routes = [
  { path: 'news/:id', component: NewsDetailComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' } // Rota curinga para 404
];
