import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadImages } from 'src/app/state/actions/images.actions';
import { selectLoading } from 'src/app/state/selectors/image.selector';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  @Input() imageSearch: string = '';
  @Input() likes: number = 0;
  @Input() views: number = 0;
  @Input() tags: string = '';

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadImages());
  }
}
