import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      { path: 'envoie', loadChildren: '../envoie/envoie.module#EnvoiePageModule' },
      { path: 'liste', loadChildren: '../liste/liste.module#ListePageModule' },
      { path: 'accueil', loadChildren: '../accueil/accueil.module#AccueilPageModule' },
      { path: 'compte', loadChildren: '../compte/compte.module#ComptePageModule' },


    
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
