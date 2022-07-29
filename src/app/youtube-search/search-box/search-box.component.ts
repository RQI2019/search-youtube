import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, filter, fromEvent, interval, map, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SearchResult } from '../SearchResult.model';
import { YoutubeSearchService } from '../youtube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() result: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
    private youtube: YoutubeSearchService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),     // extract the value of the input
      filter((text) => text.length > 1),   // filter out if empty
      debounceTime(250),                   // only once every 250ms
      tap(() => this.loading.emit(true)),  // enable loading
      switchMap((query: string) => this.youtube.search(query))
    ).subscribe({
      next: (value: SearchResult[]) => {
        this.loading.emit(false);
        this.result.emit(value);
      },
      error: (err) => {
        this.loading.emit(false);
        console.log(err)
      }
    });
  }

}
