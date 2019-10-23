import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { EnvoiePage } from '../envoie/envoie.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService, private _router: Router
             ) { }

  ngOnInit() {
  }

  loginUser (data) {
    this.auth.login(data)
    .subscribe(
      res => {
        console.log(res);
      let jwt=res.body['token'];
     this.auth.saveToken(jwt);  
        this._router.navigateByUrl('envoie')
      },
      err => {

      }
    ) 
  }

  isSuperAdmin(){
    return this.auth.isSuperAdmin();
  }

  isAdminPartenaire(){
    return this.auth.isAdminPartenaire();
  }

  isUser(){
    return this.auth.isUser();
  }

  isCaissier(){
    return this.auth.isCaissier();
  }

  isAdminSuper(){
    return this.auth.isAdminSuper();

  }
  isAdmin(){
    return this.auth.isAdmin();
  }
isAuthenticated(){
  return this.auth.isAuthenticated();
}

}

