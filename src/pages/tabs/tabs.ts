import { Component } from '@angular/core';

import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritesPage" tabTile="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTile="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
