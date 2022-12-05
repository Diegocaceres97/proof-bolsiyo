import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hit } from './shared/interfaces/data-card.interface';
import { AppState } from './state/app.state';
import { selectImagesFeature } from './state/selectors/image.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'proof-bolsiyo';
  pageTotal: number = 0;
  resultImages!: Hit[];
  page: number = 0;
  image$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.image$ = this.store.select(selectImagesFeature);
    this.image$.subscribe((imageResult) => {
      this.resultImages = imageResult.images.hits;
      this.pageTotal = this.resultImages.length;
    });
  }
 
  resetPage(page:any){
    console.log('worrrrkskks')
    this.page = page;
  }

  setPage(pageTotal: any) {
    this.page = pageTotal;
  }
}
