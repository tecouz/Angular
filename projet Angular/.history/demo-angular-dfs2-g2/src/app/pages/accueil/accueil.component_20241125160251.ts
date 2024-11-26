import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  saisieImage = "";

  listeCategories = [
    {
      titre: "Super", images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUbGxdooqKHGls6i0vJT0yXIIHN-PJtllBw&s",
      ]
    },
    { titre: "Bien", images: [] },
    { titre: "Moyen", images: ["https://assets.evcdn.net/dam-images/83712/16-9/750x422.jpeg"] },
    { titre: "Bof", images: ["https://assets.evcdn.net/dam-images/83712/16-9/750x422.jpeg"] }]


  ajoutImage() {
    if (this.saisieImage != "") {
      this.listeCategories[0].images.push(this.saisieImage)
      this.saisieImage = "";
    }
  }

  onDeplacement(indexCategorie: number, indexImage: number, plus = true) {
    //on recupere l'image a deplacer
    const imageAdeplacer = this.listeCategories[indexCategorie].images[indexImage]
    //on la place dans sa nouvelle catégorie
    this.listeCategories[indexCategorie + (plus ? 1 : -1)].images.push(imageAdeplacer)
    //on supprime l'ancienne image
    this.listeCategories[indexCategorie].images.splice(indexImage, 1)
  }

  onSuppression(indexCategorie: number, indexImage: number) {
    this.listeCategories[indexCategorie].images.splice(indexImage, 1)
  }
}