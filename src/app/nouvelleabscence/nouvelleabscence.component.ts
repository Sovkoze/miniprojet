import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Abscence } from '../models/abscence';
import { AbscenceService } from '../services/abscence.service';

@Component({
  selector: 'app-nouvelleabscence',
  templateUrl: './nouvelleabscence.component.html',
  styleUrls: ['./nouvelleabscence.component.css']
})
export class NouvelleabscenceComponent implements OnInit 
{

  angForm: FormGroup|any;
  abs:Abscence|any;
   id=0;
  constructor(private route:ActivatedRoute, private fb: FormBuilder,private abscenceService: AbscenceService,private router:Router) {
  this.angForm = this.fb.group({
  date_debut: ['', [Validators.required,Validators.minLength(1)]],
  date_fin: ['', Validators.required],
  typ_abs: ['', Validators.required],
  abscence_etat: ['', Validators.required],
  motif_abscence: ['', Validators.required],
  });
  }

  ngOnInit(): void 
  {
    this.route.params.subscribe
    (
      params=>
      {
      
        this.id=params.id;
      }
    );
  }

  postdata(angForm1:FormGroup|any)
  {
    
  this.abs=new Abscence
  (
  '',
 this.id,
  angForm1.value.typ_abs,
  angForm1.value.date_debut,
  angForm1.value.date_fin,
'En Attente',
  angForm1.value.motif_abscence
  );
  
  this.abscenceService.createabscence(this.abs)
  .subscribe(() => {
    console.log('Data added successfully!')
   this.router.navigateByUrl('/abscences/'+this.id)
  }, (err) => {
    console.log(err);
});

  }

}
