import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Hit } from 'src/app/shared/interfaces/data-card.interface';
import { SearchImageService } from 'src/app/shared/services/search-image.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() PageNumber = new EventEmitter<number>();
  @Input() page!: number;
  public categorias = [
    'science',
    'education',
    'people',
    'feelings',
    'computer',
    'buildings',
  ];

  public pageTotal: number = 0;
  public imagesSearched!: Hit[];
  private searchQuery!: string;
  public categoryQuery!: string;

  constructor(private searchService: SearchImageService) {}

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
      .subscribe((data) => {
        this.imagesSearched = data.hits;
        this.pageTotal = data.hits.length;
        this.PageNumber.emit(this.pageTotal);
      });
  }
}
