import { Pipe, PipeTransform } from '@angular/core';
import { Hit } from '../interfaces/data-card.interface';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(images: Hit[], page: number = 0): Hit[] {
    const listImagesLength = images.length;
    const nextPage = page + 4;
    if (nextPage <= listImagesLength) {
      return images.slice(page, nextPage);
    } else if (listImagesLength > 0) {
      return images.slice(page, nextPage);
    } else {
      return [];
    }
  }
}
