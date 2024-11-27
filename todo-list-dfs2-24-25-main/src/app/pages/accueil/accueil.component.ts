import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  http = inject(HttpClient)

  taches : any

  ngOnInit() {

    this.http
      .get("http://localhost:3000/taches")
      .subscribe((tachesServeur: any) => this.taches = tachesServeur)
  }

}
