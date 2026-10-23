import { Component } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  // Importamos solo los componentes Ionic que aparecen en home.page.html.
  imports: [IonContent, IonButton],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'], // Angular compila este SCSS automáticamente.
})
export class HomePage {}
