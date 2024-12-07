import { Routes } from '@angular/router';
import { OverviewComponent } from './ui/overview/overview.component';
import { ReviewComponent } from './ui/review/review.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

export const routes: Routes = [
  { path: '/', component: OverviewComponent, pathMatch: 'full' },
  { path: 'review/:box', component: ReviewComponent, pathMatch: 'full' },
  { path: '404', component: NotFoundComponent, pathMatch: 'full' },
];
