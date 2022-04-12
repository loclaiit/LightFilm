import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  genres:string=''
  listGenres:string[]=[];
  criteria={
    info:'base_info',
    limit:'12',
    page:1,
    titleType:'movie',
    genre:'',
    sort:'',
    year:'',
    title:''
  };
  constructor(private api:FilmService) {


  }

  ngOnInit(): void {
    this.listGenres=[
    " ",
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western"];

  }

  searchMovie(){
    this.api.searchCriteria = {...this.criteria};
    this.api.reLoadPage.next(1);
  }
}
