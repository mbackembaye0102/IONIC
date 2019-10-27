import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-recu-retrait',
  templateUrl: './recu-retrait.page.html',
  styleUrls: ['./recu-retrait.page.scss'],
})
export class RecuRetraitPage implements OnInit {
data :any;
  constructor(private trans: TransactionService) { }

  ngOnInit() {
    console.log(this.trans.selectedTrans);
    this.data =this.trans.selectedTrans;
  }

}
