import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { SearchResult } from '../SearchResult.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'col-sm-6 col-md-3'

  @Input() result: SearchResult;

  constructor() { }

  ngOnInit(): void {
    console.log(this.result)
  }

}
