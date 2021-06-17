import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { ApiuserService } from '../services/apiuser.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup|any;
  user:Utilisateur|any;

  constructor(private fb: FormBuilder,private userService: ApiuserService,private router:Router) {
  this.angForm = this.fb.group({
  username: ['', [Validators.required,Validators.minLength(1)]],
  password: ['', Validators.required],
  confirm: ['', Validators.required],
  nom: ['', Validators.required],
  prenom: ['', Validators.required],
  role: ['', Validators.required],
  });
  }

  ngOnInit(): void {
  }

  postdata(angForm1:FormGroup|any)
{
this.user=new Utilisateur
(
'',
angForm1.value.username,
angForm1.value.password,
angForm1.value.prenom,
angForm1.value.nom,
angForm1.value.role
);

this.userService.createUtilisateur(this.user)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['login']);
},

error => {
});
}

get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
}


