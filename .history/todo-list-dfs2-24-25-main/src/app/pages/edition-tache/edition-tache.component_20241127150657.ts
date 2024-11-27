import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edition-tache',
  imports: [
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edition-tache.component.html',
  styleUrl: './edition-tache.component.scss'
})
export class EditionTacheComponent {

  formBuilder = inject(FormBuilder)

  formulaire = this.formBuilder.group(
    {
      texte: ["", [Validators.required, Validators.minLength(5)]]
    }
  )

  onAjoutTache() {
    if(this.formulaire.valid) {
      console.log(this.formulaire.value);
      
    }
  }

}
