import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translateService: TranslateService) { }
  init(locale = 'en') {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.use(locale);
  }
}
