import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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


    constructor(public alertController: AlertController,
       private transaction : TransactionService,
        public loadingController: LoadingController,
        private router :Router) { }
  
    ngOnInit() {
    }
    prenomB:String;
    prenomE:String;

    nomB:String;
    nomE:String;
    cinE:String;
    code:String;
    telB;
    telE;
    cinB;
    typecinB:String;
    typecinE:String;

    montant;
    frai;
    total;
    dateE;
   
      info(response){
    
        //EXPEDITEUR
        this.nomB = response.nomb
        this.prenomB = response.prenomb
        this.telB = response.telelephoneb
        this.typecinB=response.typePieceb
        this.cinB = response.numeroPieceb

      //DESTINATAIRE
        this.nomE = response.nom
        this.prenomE = response.prenom
        this.telE = response.telelephone
        this.typecinE=response.typePiece
        this.cinE = response.numeroPiece

      //TRANSACTION

      this.dateE = response.dateEnvoie
      this.code = response.code
      this.montant=response.montant
      this.frai=response.frais
      this.total=response.total
      

     
      }

      async alertOk() {
        const alert = await this.alertController.create({
            header: 'Envoi d\'argent',
            subHeader: 'Infos :',
            message: 'Transfert réussi.'
            +'<p>Date : '+this.dateE+'</p>'
            +'<p>Code transaction : '+this.code+'</p>'
            +'<p>Montant transfert : '+this.montant+'</p>'
            +'<p>Frais transfert : '+this.frais+'</p>'
            +'<p>Total envoi : '+this.total+'</p>'
            +'<p>---------Bénéficiaire--------- </p>'
            +'<p>Prenom : '+this.prenomB +'</p>'
            +'<p>Nom : '+this.nomB +'</p>'
            +'<p>Telephone : '+this.telB +'</p>'
            +'<p>---------Expéditeur--------- </p>'
            +'<p>Prenom : '+this.prenomE +'</p>'
            +'<p>Nom : '+this.nomE +'</p>'
            +'<p>Telephone : '+this.telE +'</p>'
            +'<p>TypePiece : '+this.typecinE +'</p>'
            +'<p>Numero Piece : '+this.cinE +'</p>',
            buttons: ['OK']
        })
      await alert.present();
      }

    onsubmit (data:any){
      console.log(data);
      this.transaction.envoie(data)
       .subscribe(
         data=>{
           console.log('L\'envoie à été bien efféctué');
          this.info(data)
          this.presentLoading();
          //this.alertOk()
          this.goToView(data);   

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
          this.info(data)
          this.presentAlert();
          this.goToViewRetrait(data);   

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

    goToView(detail: any){
      this.transaction.selectedTrans = detail;
      this.router.navigateByUrl('/recu');   
      }
    
      goToViewRetrait(detail: any){
        this.transaction.selectedTrans = detail;
        this.router.navigateByUrl('/recu-retrait');   
        }
}
