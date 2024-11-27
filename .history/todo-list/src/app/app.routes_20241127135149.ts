import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { EditionComponent } from './pages/edition/edition.component';

export const routes: Routes = [
    {path: "", component: AccueilComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "inscription", component: InscriptionComponent},
    {path: "nouvelle-tache", component: EditionComponent},
    {path: "**", redirectTo: ""}
];
