import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class FilmService {
  GENRES_PATH: string = '/titles/utils/genres';
  TITLE_PATH: string = '/titles/search/title/';
  TITLES_PATH: string = '/titles';
  API_PATH: string = environment.API_SERVER_URL;
  reLoadPage: Subject<Object>;
  reLoadPageObs;
  api_url:string = '';
  options = {
    headers: {
      'X-RapidAPI-Host': environment.API_SERVER_URL,
      'X-RapidAPI-Key': environment.API_KEY
    }
  };
  public searchCriteria={
    info:'base_info', //base_info, mini_info,image,creators_directors_writers,revenue_budget,extendedCast,rating,awards
    limit:'12',
    page:1,
    titleType:'movie',
    genre:'',
    sort:'',
    year:'',
    title:''
  };

  constructor(private http:HttpClient) {
    this.reLoadPage = new Subject();
    this.reLoadPageObs = this.reLoadPage.asObservable();
  }

  getGenres() {
    // return this.http.get<any>(environment.URL + this.GENRES_PATH, this.options).pipe();
  }

  getFilmTitles(){
    console.log('getFilmTitles');

    if(this.searchCriteria.info !== '')
      this.api_url = '?' + this.buildQueryString()

    if (this.searchCriteria.title !=='') {
      this.api_url = this.searchCriteria.title + this.api_url;
      return this.http.get<any>(environment.URL + this.TITLE_PATH + this.api_url,this.options);
    }

    return this.http.get<any>(environment.URL + this.TITLES_PATH + this.api_url,this.options);
  }

  buildQueryString():string{
    let query:string = '';
    let keys = Object.keys(this.searchCriteria);
    keys.forEach(key=>{
      if (key !== 'title') {
        let value=(this.searchCriteria as any)[key];
      query += (value+'').trim() ==''? '':'&'+key + '=' + value;
      }
    })
    return query;
  }
}
