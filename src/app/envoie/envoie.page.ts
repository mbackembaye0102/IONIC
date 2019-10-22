import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.page.html',
  styleUrls: ['./envoie.page.scss'],
})
export class EnvoiePage implements OnInit {
  tarif: any[];
  next: any;


    constructor(private transaction : TransactionService) { }
  
    ngOnInit() {
    }
  
    onsubmit (data:any){
      console.log(data);
           this.transaction.envoie(data)
       .subscribe(
         data=>{
           console.log('L\'envoie à été bien efféctué');
          
        
         }, err=>{
          console.log(err);
  
        
         }
       )
     }

     frais(data:any){
       this.transaction.rechercheFrais(data)
       .subscribe(
         res=>{
           this.tarif=res;
           console.log(this.tarif);
         }

       )
          }


    nextForm() {
    if (!this.next) {
      this.next = true;
    } else {
      this.next = false;
      
    }
    }
  
}
