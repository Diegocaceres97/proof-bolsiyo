import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginatio-component',
  templateUrl: './paginatio-component.component.html',
  styleUrls: ['./paginatio-component.component.css'],
})
export class PaginatioComponentComponent implements OnInit, OnChanges {
  @Input() pageNumberTotal: number = 0;
  @Output() PageNumber = new EventEmitter<number>();
  public pageNumber: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange' + this.pageNumberTotal);
  }

  ngOnInit(): void {
    console.log('init' + this.pageNumberTotal);
  }

  nextPage() {
    const nextPage = this.pageNumber + 5;
    if (nextPage <= this.pageNumberTotal) {
      this.pageNumber += 5;
      this.PageNumber.emit(this.pageNumber);
    }
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber -= 5;
      this.PageNumber.emit(this.pageNumber);
    }
  }
}
