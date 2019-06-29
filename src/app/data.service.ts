import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private _data = [
    'Ana', 'John', 'Beatriz'
  ];

  search(query: string): Observable<string[]> {
    return of(this._data.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1));
  }

}