import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hit } from 'src/app/shared/interfaces/data-card.interface';
import { SearchImageService } from 'src/app/shared/services/search-image.service';
import { loadedImages } from 'src/app/state/actions/images.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() pageReset = new EventEmitter<number>();
  public categorias = [
    'science',
    'education',
    'people',
    'feelings',
    'computer',
    'buildings',
  ];

  public imagesSearched!: Hit[];
  private searchQuery!: string;
  public categoryQuery!: string;

  constructor(
    private searchService: SearchImageService,
    private store: Store<any>
  ) {}

  valueSearchImage(searchQuery: string) {
    if (!searchQuery) {
      return;
    }

    this.searchQuery = searchQuery ? searchQuery : '';
    this._getSearchImage();
  }

  getSelectedDropdown(link: any) {
    this.categoryQuery = this.categorias[link];
    this.imagesSearched = [];
    this._getSearchImage();
  }

  deleteCategory() {
    this.categoryQuery = '';
    this.imagesSearched = [];
    this._getSearchImage();
  }

  _getSearchImage() {
    if (!this.searchQuery && !this.categoryQuery) {
      return;
    }

    this.searchService
      .searchImage(this.searchQuery, this.categoryQuery)
      .subscribe((images) => {
        this.store.dispatch(loadedImages({ images }));
        this.imagesSearched = images.hits;
      });
    this.pageReset.emit(0);
  }
}
