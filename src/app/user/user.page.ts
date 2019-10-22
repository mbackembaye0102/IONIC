import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  profils;
  utilisateurs
  imageUrl: string="/assets/img/default.png ";
  fileToUpload: File=null;
    constructor(private users : UserService, private auth: AuthService, private router: Router) { }
  
    ngOnInit() {
      this.users.getAllProfil().subscribe(
        res=>{
          console.log(res);
          this.profils=res
          if (this.auth.getRole()=='ROLE_SUPER_ADMIN' || this.auth.getRole()=='ROLE_ADMIN_SUPER'  ){
             this.profils=[this.profils[2],this.profils[3] ]
          }else if (this.auth.getRole()=='ROLE_ADMIN_PARTENAIRE' || this.auth.getRole()=='ROLE_ADMIN'  ){
            this.profils=[this.profils[0],this.profils[5] ]
         }
  
        }, err=>{
          console.log(err);
        }
      )
      
     }
  
     handleFileInput(File : FileList){
       this.fileToUpload=File.item(0);
      var reader= new FileReader();
      reader.onload=(event:any)=>{
        this.imageUrl=event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
     }
      
  
     onsubmit (data:any){
      console.log(data);
      console.log(this.fileToUpload);
       this.users.addUser(data, this.fileToUpload)
       .subscribe(
         data=>{
       
         }, err=>{
          console.log(err);
        
         }
       )
     }
  
  
    
  
    //  utilisateur = new FormGroup({
    //     username: new FormControl ('', [Validators.required, Validators.minLength(5),
    //       Validators.pattern(/^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    //     telephone: new FormControl ('', [Validators.required, Validators.minLength(9),Validators.maxLength(9),Validators.pattern(  
    //       /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
    //     prenom: new FormControl ('', [Validators.required, Validators.minLength(3),
    //       Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    //       nom: new FormControl ('', [Validators.required, Validators.minLength(2),
    //         Validators.pattern(/^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    //         profil: new FormControl ('', Validators.required),
  
  
    //  })
  
     errorMessage={
       'username':[
        {type:'required', message:'Champ username obligatoire '},
        {type:'minlength', message:'veuillez saisir au minimum 5 lettres'},
        {type:'pattern', message:'Ecrivez correctement le username'}
       ],
       'telephone':[
        {type:'required', message:'Champ telephone obligatoire '},
        {type:'minlength', message:'veuillez saisir au minimum 9 lettres'},
        {type:'maxlength', message:'veuillez saisir au maximum 9 lettres'},
        {type:'pattern', message:'Ecrivez correctement le numero de telephone'}
       ],
       'prenom':[
        {type:'required', message:'Champ prenom obligatoire '},
        {type:'minlength', message:'veuillez saisir au minimum 3 lettres'},
        {type:'pattern', message:'Ecrivez correctement le prenom'}
       ],
       'nom':[
        {type:'required', message:'Champ prenom obligatoire '},
        {type:'minlength', message:'veuillez saisir au minimum 2 lettres'},
        {type:'pattern', message:'Ecrivez correctement le nom'}
       ],
       'profil':[
        {type:'required', message:'Champ role est  obligatoire '}
       ]
  
  
     }
}
