import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.page.html',
  styleUrls: ['./envoie.page.scss'],
})
export class EnvoiePage implements OnInit {
  tarif: any[];
  next: any;
  op: boolean;
  codes: any[];


    constructor(public alertController: AlertController, private transaction : TransactionService, public loadingController: LoadingController) { }
  
    ngOnInit() {
    }
  
    onsubmit (data:any){
      console.log(data);
           this.transaction.envoie(data)
       .subscribe(
         data=>{
           console.log('L\'envoie à été bien efféctué');
          this.presentLoading();
          this.presentEnvoie();

        // window.location.reload();


        
         }, err=>{
          console.log(err);
  
        
         }
       )
     }

     onsubmitretrait (data:any){
      console.log(data);
           this.transaction.retrait(data)
       .subscribe(
         data=>{
          window.location.reload();
          this.presentAlert();
          this.presentCode();
         }, err=>{
          console.log(err);
         }
       )
     }
  
  
  
    submitcode (data:any){
      console.log(data);
           this.transaction.rechercheCode(data)
       .subscribe(
         data=>{
         console.log(data);
          this.codes=data
          this.presentLoadCode();
          this.presentLoading();

         }, err=>{
          console.log(err);
         }
       )
     }
     frais(data:any){
       console.log(data);
       this.transaction.rechercheFrais(data)
       .subscribe(
         res=>{
           this.tarif=res;
           console.log(res);
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
  
    buttonEnvoie(){
      this.op=false;


    }
    buttonRetrait(){
      this.op=true;

    }

    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 500
      });
      await loading.present();
    
    }
    async presentLoadCode() {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 1000
      });
      await loading.present();
    
    }


    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Retrait',
        subHeader: 'Daara Dji Transfert',
        message: 'Retrait Effectué avec succés.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
    async presentCode() {
      const alert = await this.alertController.create({
        header: 'CODE WARI',
        subHeader: 'Daara Dji Transfert',
        message: 'Code Valide',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
    async presentEnvoie() {
      const alert = await this.alertController.create({
        header: 'ENVOIE',
        subHeader: 'Daara Dji Transfert',
        message: 'TRANSFERT EFFECTUÉ AVEC SUCCÉS',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 5000,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
}
