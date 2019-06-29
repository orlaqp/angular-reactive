import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tap, switchMap, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: []
})
export class ReactiveSearchComponent {
  private queryChanged = new Subject<string>();

  items$ = this.queryChanged.pipe(
    startWith(''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(query => {
      console.log('searching ...');
      return this.dataService.search(query)
    })
  )
  
  constructor(private dataService: DataService) { }

  search(query: string) {
    this.queryChanged.next(query);
  }

}