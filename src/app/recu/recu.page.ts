import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {
  data: any;

  constructor(private trans: TransactionService) { }

  ngOnInit() {
    console.log(this.trans.selectedTrans);
    this.data =this.trans.selectedTrans;
  }

}
