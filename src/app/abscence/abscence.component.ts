import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { AbscenceService } from '../services/abscence.service';
import { ApiuserService } from '../services/apiuser.service';

@Component({
  selector: 'app-abscence',
  templateUrl: './abscence.component.html',
  styleUrls: ['./abscence.component.css']
})
export class AbscenceComponent implements OnInit {
  
  user:Utilisateur|any;
  users:Utilisateur[]|any;
  nom :string|any;
  id :number|any;
  statusCode: any;
  id_emp: number|any;
 
  constructor(
    private absapi:ApiuserService,
    private route:ActivatedRoute, 
 
    ) { }

  ngOnInit(): void 
  {
    this.route.params.subscribe
    (
      params=>
      {
      
        this.id=params.id;
        this.absapi.getusers().subscribe((users:Utilisateur[]|any)=>
        { 
          this.users=users;
         
         // console.log(users)
          const utilisateurs:Utilisateur[]|any=this.users.filter((a:Utilisateur|any) => a.id_employe==this.id);
         // console.log(utilisateurs[0])
          this.user=utilisateurs[0];
          this.nom=this.user.firstName+" "+this.user.lastName;
          this.id=this.user.id;
          this.setid(params.id)
        },
         (err) => {
           console.log(err);
       });
    

      }
    );
  }
  setid(id:number)
  {
    this.id_emp=id;
  }
  getid()
  {
    return this.id_emp;
  }
}

