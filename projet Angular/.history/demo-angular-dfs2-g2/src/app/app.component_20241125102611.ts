import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./pages/accueil/accueil.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-angular-dfs2-g2';
}
