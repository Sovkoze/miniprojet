import { Component, Input, OnInit } from '@angular/core';
import { AbscenceComponent } from '../abscence/abscence.component';
import { Abscence } from '../models/abscence';
import { AbscenceService } from '../services/abscence.service';

@Component({
  selector: 'app-soldeabscence',
  templateUrl: './soldeabscence.component.html',
  styleUrls: ['./soldeabscence.component.css']
})
export class SoldeabscenceComponent implements OnInit {
  solde_abscence:Abscence[]|[]|any;
  image:string|any;
  @Input() nom = ''; // decorate the property with @Input()
  @Input() id :number|any;
  id_emp:number|any;
  constructor(private abscenceservice:AbscenceService) { }

  ngOnInit(): void 
  {
      this.id_emp=this.id;
    this.getsoldeabscenceUser();
    this.image="../assets/user.jpg";
  }
  getsoldeabscence()
  {
    this.abscenceservice.getsoldeabscence().subscribe((abs:Abscence)=>
    {
      this.solde_abscence=abs;
     // console.log(this.solde_abscence);
    }
    );
  }
  getsoldeabscenceUser()
  {

   // console.log(this.id);
    this.abscenceservice.getsoldeabscence_foruser(this.id_emp).subscribe((abs:Abscence)=>
    {
      this.solde_abscence=abs;
      console.log(this.solde_abscence);
    }
    );
  }
 
}
