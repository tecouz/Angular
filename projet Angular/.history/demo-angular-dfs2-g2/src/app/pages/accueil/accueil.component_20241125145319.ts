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
        "https://assets.evcdn.net/dam-images/83712/16-9/750x422.jpeg"]
    },
    { titre: "Bien", images: [] },
    { titre: "Moyen", images: [] },
    { titre: "Bof", images: [] }]

    
  ajoutImage() {
    if (this.saisieImage != "") {
      this.listeCategories[0].images.push(this.saisieImage)
      this.saisieImage = "";
    }
  }
}