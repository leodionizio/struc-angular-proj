import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ext',
    loadChildren: './external/external.module#ExternalModule',
  },
  {
    path: 'page',
    loadChildren: './pages/Pages.module#PagesModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ext'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
