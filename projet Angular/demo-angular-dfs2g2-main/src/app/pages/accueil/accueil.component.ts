
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare type Categorie = { titre: string, images: string[] }

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  saisieImage = "";
  saisieCategorie = "";

  listeCategories: Categorie[] = []

  http = inject(HttpClient)

  ngOnInit() {

    //récupérer les catégorie de la personne

    const jwt = localStorage.getItem("jwt");

    //si la personne est connectée
    if(jwt) {
      this.http.get(
        "http://localhost:3000/categories", 
        {headers: {Authorization: jwt}}
      )
        .subscribe(listeCategories => console.log(listeCategories))
    }



    const jsonListeCategories = localStorage.getItem("sauvegarde")

    if (jsonListeCategories == null) {
      
      this.http
        .get<Categorie[]>("http://localhost:3000/categories")
        .subscribe((categoriesServeur) => {
          this.listeCategories = categoriesServeur
          this.sauvegarder()
        })

    } else {
      this.listeCategories = JSON.parse(jsonListeCategories)
    }
  }

  sauvegarder() {
    localStorage.setItem('sauvegarde', JSON.stringify(this.listeCategories))
  }

  ajoutImage() {
    if (this.saisieImage != "") {
      this.listeCategories[0].images.push(this.saisieImage)
      this.saisieImage = "";
      this.sauvegarder()
    }
  }

  onDeplacement(indexCategorie: number, indexImage: number, plus = true) {
    //on recupere l'image a deplacer
    const imageAdeplacer = this.listeCategories[indexCategorie].images[indexImage]
    //on la place dans sa nouvelle catégorie
    this.listeCategories[indexCategorie + (plus ? 1 : -1)].images.push(imageAdeplacer)
    //on supprime l'ancienne image
    this.listeCategories[indexCategorie].images.splice(indexImage, 1)
    this.sauvegarder()
  }

  onSuppression(indexCategorie: number, indexImage: number) {
    this.listeCategories[indexCategorie].images.splice(indexImage, 1)
    this.sauvegarder()
  }

  ajoutCategorie() {
    if (this.saisieCategorie != "") {

      this.listeCategories.push({ titre: this.saisieCategorie, images: [] })
      this.saisieCategorie = ""
      this.sauvegarder()
    }
  }

  suppressionCategorie(indexCategorie: number) {
    this.listeCategories.splice(indexCategorie, 1)
  }
}