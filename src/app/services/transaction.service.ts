import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  selectedTrans :Transaction;


  private frais:string = "http://localhost:8000/api/frais";
  rechercheFrais(data)  {
    return  this.http.post<any>(this.frais,data);
   }

   private detailT:string="http://localhost:8000/api/detailTransaction";
   detaitTransaction(data)  {
    return  this.http.post<any>(this.detailT,data);
   }




   private recherchecode:string = "http://localhost:8000/api/recherchecode";
  rechercheCode(data) : Observable<any[]>  {

    return  this.http.post<any>(this.recherchecode,data);
   }


  constructor( private http:HttpClient) { }

  envoie(envoye){
    const host = "http://localhost:8000/api/envoie";
  
    const formData: FormData= new FormData();
    formData.append('prenom', envoye.prenom);
    formData.append('nom', envoye.nom);
    formData.append('typePiece', envoye.typePiece);
    formData.append('numeroPiece', envoye.numeroPiece);
    formData.append('telephone', envoye.telephone);
    formData.append('prenomb', envoye.prenomb);
    formData.append('nomb', envoye.nomb);
    formData.append('ok', envoye.ok);
    formData.append('telephoneb', envoye.telephoneb);
    formData.append('montant', envoye.montant);
      return this.http.post(host, formData);
  }

  
  retrait (retrait){
    const host = "http://localhost:8000/api/retrait";
    const formData: FormData= new FormData();
    formData.append('code', retrait.code);
    formData.append('typePieceb', retrait.typePieceb);
    formData.append('numeroPieceb', retrait.numeroPieceb);

      return this.http.post(host, formData);
  }

}
