import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiuserService } from '../services/apiuser.service';
import { first } from 'rxjs/operators';
import { Utilisateur } from '../models/utilisateur';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:Utilisateur[]|any;
  angForm: FormGroup|any;
  one_user:Utilisateur[]|any;
  constructor(private fb: FormBuilder,private userService: ApiuserService,private router:Router) {
  this.angForm = this.fb.group({
  username: ['', [Validators.required,Validators.minLength(1)]],
  password: ['', Validators.required],
  role: ['', Validators.required]
  });
  }

  ngOnInit(): void 
  {
  }
  onSubmit()
  {
    console.log("ok");
  }
postdata(angForm1:FormGroup|any)
{
  const data=new Utilisateur('',angForm1.value.username,angForm1.value.password,'','',angForm1.value.role);
  this.userService.getusers().subscribe((users:Utilisateur[]|any)=>
 { 
  //recuperation liste users
   this.users=users;
   //On recupere les données du user authentifié via la fonction _User(data)
   this._User(data).subscribe((user:Utilisateur[]|any)=>
   {
    this.one_user= user;
   },
   (err:string|any) => {
     console.log(err);
     alert("eRREUR dATABASE")
 
 });
  //On verifie si le username et le password existent dans notre liste d'utilisateur
  if(this.one_user.role=="Employe" && this.one_user.role!=data.role)
  {
    alert("Le rôle choisi n'est pas le votre")
  return;
  }
  else
  {
  if(this._isUser(data)==3 && data.role=="Employe" )
    {  
      const redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/abscences/'+`${this.one_user.id_employe}`;
       this.router.navigate([redirect]);
    }
    else if(this._isUser(data)==3 && this.one_user.role=="Administrateur")
  {  
    const redirect = this.userService.redirectUrl ? 
    this.userService.redirectUrl : '/dashboard/'+`${this.one_user.id_employe}`;
     this.router.navigate([redirect]);
  }

  else
  {
    alert("User name or password is incorrect")

  } 
  }


  },
  (err:string|any) => {
    console.log(err);
    alert("eRREUR dATABASE")

});
/*this.userService.AuthUtilisateur(data).subscribe(() => {
    console.log('Data added successfully!')
    //this.ngZone.run(() => this.router.navigateByUrl('/blog/article/'+this.id_article.getkeyarticle()))
  }, (err) => {
    console.log(err);
});*/

}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
_isUser(data:Utilisateur)
{
   //this.unique = new Set(this.unique.category);
        let authusername=this.users.filter((user:|any)=>
        user.username.indexOf(data.username)!==-1);

        let authpassword=this.users.filter((user:|any)=>
        user.password.indexOf(data.password)!==-1);

        let authrole=this.users.filter((user:|any)=>
        user.role.indexOf(data.role)!==-1);
        return authusername.length + authpassword.length + authrole.length;
}
_User(data:Utilisateur)
{
        let authusername=this.users.filter((user:|any)=>
        user.username.indexOf(data.username)!==-1);
        let authpassword=this.users.filter((user:|any)=>
        user.password.indexOf(data.password)!==-1);
         console.log(authusername[0])
        return of(authusername[0]);
}



}



