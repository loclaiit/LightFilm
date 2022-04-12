import { Component, HostListener, Inject } from '@angular/core';
import { SessionService } from './services/session.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LightFilm';
  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   let footerOffset = document.getElementById('app-footer')?.offsetTop || 0;
  //   let menuOffsetTop = document.getElementById('app-menu')?.offsetTop || 0;
  //   let menuOffset = document.getElementById('app-menu')?.offsetHeight || 0;

  //   if (footerOffset && menuOffset && (menuOffset >= footerOffset)) {

  //     document.getElementById('app-menu')?.classList.replace('posFixed','posAbsolute');
  //     console.log(footerOffset,menuOffset,window.innerHeight-menuOffset,menuOffsetTop);
  //   }
  //   else{
  //     document.getElementById('app-menu')?.classList.replace('posAbsolute','posFixed');
  //     console.log(footerOffset,menuOffset,window.innerHeight-menuOffset,menuOffsetTop);
  //   }
  // }

}
