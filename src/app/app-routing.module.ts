import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'envoie', loadChildren: './envoie/envoie.module#EnvoiePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
