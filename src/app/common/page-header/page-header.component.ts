import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor(private session:SessionService) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.session.menuFlag = !this.session.menuFlag;
    this.session.refresh.next(1);
  }
  change(){
    document.body.classList.toggle('light');
  }
}
