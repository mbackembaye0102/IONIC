import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 host:string = "http://localhost:8000/api/login";
  jwt:string;
  username:string;
  roles: Array<string>;

  constructor(private http: HttpClient, private router: Router
            ) { 
            }
  login(data){
 
  
   return this.http.post(this.host, data,{observe: 'response'});

  }

  
saveToken(jwt:string){
  localStorage.setItem('token',jwt);
 this.jwt=jwt;
  this.parseJWT();
}

public getToken():string {
var local=localStorage.getItem('token');
 return local;
}

parseJWT(){
  const jwtHelper= new JwtHelperService();
  const objWT=jwtHelper.decodeToken(this.jwt);
  this.username=objWT.obj;
   this.roles=objWT.roles;
   localStorage.setItem('role', objWT.roles);
   localStorage.setItem('username', objWT.username)

}

getRole(){
  return localStorage.getItem('role');
}

isSuperAdmin(){
  return this.roles.indexOf('ROLE_SUPER_ADMIN')>=0;
}

isAdminPartenaire(){
  return this.roles.indexOf('ROLE_ADMIN_PARTENAIRE')>=0;
}

isUser(){
  return this.roles.indexOf('ROLE_USER')>=0;
}

isCaissier(){
  return this.roles.indexOf('ROLE_CAISSIER')>=0;
}

isAdminSuper(){
  return this.roles.indexOf('ROLE_ADMIN_SUPER')>=0;
}


isAdmin(){
  return this.roles.indexOf('ROLE_ADMIN')>=0;
}

isAuthenticated(){
return this.roles && (this.isAdmin() || this.isUser());

}

loadToken(){
  this.jwt= localStorage.getItem('token');
  this.parseJWT();
}

logOut(){
 
  localStorage.removeItem('token');
  this.initParams();
  return this.router.navigate(['/home']);


}

initParams(){
  this.jwt=undefined;
  this.username=undefined;
  this.roles=undefined;
}


}
