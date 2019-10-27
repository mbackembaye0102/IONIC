import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'envoie', loadChildren: './envoie/envoie.module#EnvoiePageModule' },
  { path: 'liste', loadChildren: './liste/liste.module#ListePageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'recu', loadChildren: './recu/recu.module#RecuPageModule' },
  { path: 'recu/:id', loadChildren: './recu/recu.module#RecuPageModule' },
  { path: 'recu-retrait', loadChildren: './recu-retrait/recu-retrait.module#RecuRetraitPageModule' },
  { path: 'compte', loadChildren: './compte/compte.module#ComptePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
