import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from './youtube-search.service';
import { SearchResult } from './SearchResult.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YoutubeSearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor(private yts: YoutubeSearchService) { }

  ngOnInit(): void { }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

}
