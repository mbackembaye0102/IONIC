import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  detailTs: any;
  public transactions: FormGroup;
  trans: boolean;
  constructor(private transaction : TransactionService, private formGroup: FormBuilder, private router :Router) { }
  debut=new Date();
  fin =new Date();
  ngOnInit() {
    this.detailT();
  }
  detaitTransaction=this.formGroup.group({
    debut: [this.debut],
    fin: [this.fin]
  })
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  transact() {
    this.trans = false;
  }
  commission() {
    this.trans = true;
  }
  

  detailT (){
    console.log();
         this.transaction.detaitTransaction(this.detaitTransaction.value)
        .subscribe(
       data=>{
       console.log(data);
        this.detailTs=data

       }, err=>{
        console.log(err);
       }
     )
   }

   goToView(detail: any){
    this.transaction.selectedTrans = detail;
    this.router.navigateByUrl('/detail');   
    }

}
