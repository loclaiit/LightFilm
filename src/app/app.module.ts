import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { MenuComponent } from './common/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FilmService} from '../app/services/film.service';
import {SessionService} from "../app/services/session.service";
import {MatCardModule} from '@angular/material/card';
import { SkeletenLoaderComponent } from './common/skeleten-loader/skeleten-loader.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PagingComponent } from './common/paging/paging.component';
import { FooterComponent } from './common/footer/footer.component';
import { PageContentComponent } from './page-content/page-content.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PageHeaderComponent,
    MenuComponent,
    SkeletenLoaderComponent,
    PagingComponent,
    FooterComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    FilmService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
