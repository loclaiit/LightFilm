import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  constructor(private api:FilmService) {}

  ngOnInit(): void {this.addEvent();}

  reload(){
    this.api.reLoadPage.next(1);
  }

  addEvent() {
    var btns = document.querySelectorAll('.btn');
    let __this=this;
    // var bigDotContainer = document.querySelector('.big-dot-container');
    // var littleDot = document.querySelector('.little-dot');
    var paginationWrapper = document.querySelector('.pagination-wrapper');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', btnClick);
    }

    function btnClick(e: any) {
      if (e.target.classList.contains('btn--prev')) {
        paginationWrapper?.classList.add('transition-prev');
        if(__this.api.searchCriteria.page != 1)
          __this.api.searchCriteria.page-=1;
      } else {
        paginationWrapper?.classList.add('transition-next');
        __this.api.searchCriteria.page+=1;
      }

      setTimeout(cleanClasses, 500);
      __this.reload();
    }

    function cleanClasses() {
      if (paginationWrapper?.classList.contains('transition-next')) {
        paginationWrapper.classList.remove('transition-next');
      } else if (paginationWrapper?.classList.contains('transition-prev')) {
        paginationWrapper.classList.remove('transition-prev');
      }
    }
  }
}
