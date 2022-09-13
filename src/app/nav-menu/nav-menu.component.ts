import { Component } from '@angular/core';

@Component({
   selector: 'app-nav-menu',
   templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {

   menu() {
      let navigation = document.querySelector(".navigation");
      navigation.classList.toggle("active");
   }
}
