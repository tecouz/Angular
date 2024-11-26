import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  compteur = 0;
  listeCategories = ["Super", "Top", "Moyen", "Bof"];

}
