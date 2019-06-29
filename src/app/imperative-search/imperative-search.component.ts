import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'imperative-search',
  templateUrl: './imperative-search.component.html',
  styleUrls: []
})
export class ImperativeSearchComponent implements OnInit {
  items: string[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.search('');
  }

  search(query: string) {
    this.dataService.search(query)
      .pipe(
        tap(items => this.items = items)
      ).subscribe();
  }

}