import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-accueil',
  imports: [MatButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  http = inject(HttpClient);

  taches : any

  ngOnInit(){
    this.http
    .get('http://localhost:3000/taches')
    .subscribe((tachesServeur: any) => this.taches = tachesServeur);
  }
}
