import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proof-bolsiyo';
  pageTotal: number = 0;
  page: number = 0;

  setPageTotal(pageNumber: any) {
    this.pageTotal = pageNumber;
  }

  setPage(pageTotal: any) {
    this.page = pageTotal;
  }
}
