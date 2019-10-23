import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });


    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  envoieGroup= this.formBuilder.group({
    'prenom': [null, [Validators.required,Validators.minLength(2),Validators.pattern(/[a-z-A-Z]/)]],
  }

  )

  errorenom() {
    return this.envoieGroup.get('prenom').hasError('required') ? 'Le nom est requis ' :
      this.envoieGroup.get('prenom').hasError('pattern') ? 'Le nom est invalide' :
      this.envoieGroup.get('prenom').hasError('minLength') ? '' : 'Le nom doit contenir au moins deux caractères';
    }


}
