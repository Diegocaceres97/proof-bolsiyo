import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataCard } from '../interfaces/data-card.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchImageService {
  API_URL = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';

  constructor(private http: HttpClient) {}

  searchImage(
    searchQuery: string,
    categoryQuery?: string
  ): Observable<DataCard> {
    const query = !categoryQuery
      ? `${this.API_URL}&lang=es&q=${searchQuery}`
      : `${this.API_URL}&lang=es&q=${
          searchQuery ? searchQuery : ''
        }&category=${categoryQuery}`;
    return this.http.get<DataCard>(query);
  }

  private imageInformation(data: DataCard[]) {
    for (const iterator of data) {
      iterator;
    }

    return [];
  }
}
