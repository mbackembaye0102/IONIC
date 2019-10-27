import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages =[
    {title:"Home",url:"/menu/accueil",icon:'home'},
    {title:"Transaction",url:'/menu/envoie',icon:'swap'},
    {title:"Liste des Transaction",url:'/menu/liste',icon:'list-box'},
    {title:"Compte",url:'/menu/compte',icon:'cash'},
    {title:"Deconnexion",url:'/home',icon:'log-out'}
    
  ]
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onMenuAction(p) {
    if (p.title === 'logout') {
      this.authService.logOut();
    }
    this.router.navigateByUrl(p.url);
  }
}
