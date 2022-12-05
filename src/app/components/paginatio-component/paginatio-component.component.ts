import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginatio-component',
  templateUrl: './paginatio-component.component.html',
  styleUrls: ['./paginatio-component.component.css'],
})
export class PaginatioComponentComponent {
  @Input() pageNumberTotal: number = 0;
  @Output() PageNumber = new EventEmitter<number>();
  public pageNumber: number = 0;

  nextPage() {
    const nextPage = this.pageNumber + 4;
    if (nextPage < this.pageNumberTotal) {
      this.pageNumber += 4;
      this.PageNumber.emit(this.pageNumber);
    }
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber -= 4;
      this.PageNumber.emit(this.pageNumber);
    }
  }
}
