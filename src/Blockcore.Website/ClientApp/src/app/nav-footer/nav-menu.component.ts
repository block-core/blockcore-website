import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
   selector: 'app-nav-footer',
   templateUrl: './nav-footer.component.html'
})
export class NavFooterComponent {

   className: string;

   constructor(private renderer: Renderer2) {
      this.updateMode();
   }

   get darkMode(): boolean {
      return (localStorage.getItem('dark-mode') === 'on');
   }

   set darkMode(value: boolean) {
      if (value) {
         localStorage.setItem('dark-mode', 'on');
      } else {
         localStorage.setItem('dark-mode', 'off');
      }
   }

   toggle() {
      // Toggle the dark mode.
      this.darkMode = !this.darkMode;

      // const trans = () => {
      //    document.documentElement.classList.add('transition');
      //    window.setTimeout(() => {
      //       document.documentElement.classList.remove('transition');
      //    }, 500);
      // };

      // trans();

      // Update the UI.
      this.updateMode();
   }

   updateMode() {


      if (this.darkMode) {
         this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark'); //  .addClass(document.body, 'dark');
      } else {
         this.renderer.setAttribute(document.documentElement, 'data-theme', 'light');
         // this.renderer.removeClass(document.body, 'dark');
      }
   }
}
