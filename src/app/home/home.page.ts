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

  //loginUserData = {}
  
  // username:string;
  // roles: Array<string>;

  constructor(private auth: AuthService, private _router: Router
             ) { }

  ngOnInit() {
  }

  loginUser (data) {
   // console.log(this.loginUserData)
    this.auth.login(data)
    .subscribe(
      res => {
        console.log(res);
       // localStorage.setItem('token', res.token);
      let jwt=res.body['token'];
     // alert(jwt);
     //let jwt=res.headers.get('Authorization');
      //console.log(jwt);
     this.auth.saveToken(jwt);  //   console.log(obJWT);
       //this.jwt=res.token;EnvoiePage
       // this.parseJWT();
        this._router.navigateByUrl('envoie')
        //console.log(res.body["token"]);
      },
      err => {

      }
    ) 
  }

   
  // parseJWT(){
  //   let jwtHelper= new JwtHelperService();
  //   let obJWT=jwtHelper.decodeToken(this.jwt);
  //   console.log(obJWT);
  //   this.username=obJWT.obj;
  //   this.roles=obJWT.roles;
  // }
  


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

