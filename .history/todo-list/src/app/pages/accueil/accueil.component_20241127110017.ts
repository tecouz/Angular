import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  http = inject(HttpClient);

  taches : any

  ngOnInit(){
    this.http.get('http://localhost:3000/todos')
    .subscribe((tachesServeur: any => this.taches = tachesServeur));
  }
}
