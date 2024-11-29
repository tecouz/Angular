import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

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
  http = inject(HttpClient)
  router = inject(Router)

  formulaire = this.formBuilder.group(
    {
      texte: ["", [Validators.required, Validators.minLength(5)]]
    }
  )

  onAjoutTache() {
    if (this.formulaire.valid) {

      this.http
        .post("http://localhost:3000/tache", this.formulaire.value)
        .subscribe((reponse: any) => this.router.navigateByUrl("/"))

    }
  }

}
