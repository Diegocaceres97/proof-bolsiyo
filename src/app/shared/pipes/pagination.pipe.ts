import { Pipe, PipeTransform } from '@angular/core';
import { Hit } from '../interfaces/data-card.interface';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(images: Hit[], page: number = 0): Hit[] {
    const nextPage = page+5;
    if(nextPage <= images.length){
      return images.slice(page,nextPage);
    }else{
      return [];
    }
  }
}
