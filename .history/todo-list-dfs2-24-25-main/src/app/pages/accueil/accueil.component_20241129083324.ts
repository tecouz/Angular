import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { Tache } from '../../models/Tache';

@Component({
  selector: 'app-accueil',
  imports: [
    MatButtonModule,
    RouterLink,
    MatIconModule,
    MatCheckboxModule,
    DatePipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  http = inject(HttpClient)

  taches: Tache[] = []

  ngOnInit() {
    this.rafraichir()
  }

  rafraichir() {
    this.http
      .get<Tache[]>("http://localhost:3000/taches")
      .subscribe(tachesServeur => this.taches = tachesServeur)
  }

  onSuppressionTache(idTacheAsupprimer: number) {

    this.http.delete(`http://localhost:3000/tache/${idTacheAsupprimer}`)
      .subscribe(resultat => this.rafraichir());

  }

  onInversionStatus(tache: Tache) {
    this.http.patch(
      `http://localhost:3000/tache/change-status/${tache.id}`,
      { fini: !tache.fini })
      .subscribe(resultat => this.rafraichir());

  }

}