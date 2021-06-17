import { Component, Input, OnInit } from '@angular/core';
import { Abscence } from '../models/abscence';
import { AbscenceService } from '../services/abscence.service';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-listeabscence',
  templateUrl: './listeabscence.component.html',
  styleUrls: ['./listeabscence.component.css']
})
export class ListeabscenceComponent implements OnInit {
  liste_abscence:Abscence[]|any;
  solde_abscence:[]|any;
  @Input() id :number|any;
  id_emp:number|any;
  constructor(private abscenceservice:AbscenceService) 
  { 

  }

  ngOnInit(): void 
  {
    this.id_emp=this.id;
   this.getallabscences();
  }
  getallabscences()
  {
    this.abscenceservice.getallabscenceId(this.id_emp).subscribe((emp:Abscence)=>
    {
      this.liste_abscence=emp;
      console.log(this.liste_abscence)
    }
    );
  }

  getColor(etat:string|any):string|any
  {
   if(etat=="En Attente")
     return "green";
     else if(etat=="Acceptée")
     return "blue";
     else if(etat=="Refusée")
      return "red";
  }

}
