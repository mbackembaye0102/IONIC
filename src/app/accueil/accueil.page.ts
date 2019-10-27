import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  

  constructor(private router :Router) { }

  ngOnInit() {
  }

  transaction(){
    this.router.navigateByUrl('menu/envoie');   
    }
    liste(){
      this.router.navigateByUrl('menu/liste');   
      }

      compte(){
        this.router.navigateByUrl('menu/compte');   
        }
  
}
