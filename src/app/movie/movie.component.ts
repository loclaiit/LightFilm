import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { concat } from 'rxjs/operators';
import { FilmService } from '../services/film.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  genres: string[] = [];
  films: any[] = [];
  getSubscription: Subscription | undefined;

  constructor(private api: FilmService, private session:SessionService) {
  }

  ngOnDestroy(): void {
    this.getSubscription?.unsubscribe;
  }

  ngOnInit(): void {
    // this.session.refreshObs.subscribe(()=>{
    //   this.films.forEach((e)=>{
    //     e.loaded = false;
    //   })
    //   setTimeout(() => {
    //     this.films.forEach((e)=>{
    //       e.loaded = true;
    //     });
    //   }, 200);
    // })

    this.api.searchCriteria.year = '2020';
    this.api.searchCriteria.limit = '12';
    this.api.searchCriteria.genre= 'Action';
    this.api.searchCriteria.sort = 'year.decr';
    this.getMovies();
    this.api.reLoadPageObs.subscribe(()=>{
      this.getMovies();
    });
  }

  getMovies(){
    this.api.getFilmTitles().subscribe((res) => {
      this.films = res.results;
      if (!this.films) {
        return;
      }
      this.films.forEach((e) => {
        e.loaded = false;
        e.togglePlot = false;
        if (e.primaryImage == null) {
          e.primaryImage = { url: 'assets/image/no-image.png' };
        }
        e.releaseDateStr = '';
        if (e.releaseDate !== null) {
          e.releaseDate.day += '';
          e.releaseDate.month += '';
          e.releaseDate.year += '';
          e.releaseDateStr = (e.releaseDate.month == 'null'? '??/': (e.releaseDate.month + '/'))
                            + (e.releaseDate.day == 'null'? '??/': (e.releaseDate.day + '/'))
                            + (e.releaseDate.year  == 'null'? '????':e.releaseDate.year);
        }
      });
    });
  }

  loaded(film:any){
    setTimeout(() => {film.loaded = true}, 1000);
  }

  togglePlot(index: number){
    this.films.forEach(function(f, i) {
      if(i == index)
        f.togglePlot=!f.togglePlot
      else
        f.togglePlot = false;
    });

  }

}
