import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SearchResult } from './SearchResult.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  YOUTUBE_API_KEY: string = 'AIzaSyDJGQ130npCy7-_weGEOn8L3jSG_JUb_p0';
  YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search"

  constructor(
    private http: HttpClient
  ) {
  }


  search(query: string): Observable<SearchResult[]> {

    const params: string = [
      `q=${query}`,
      `key=${this.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.YOUTUBE_API_URL}?${params}`;
    console.log(queryUrl)
    
    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return <any>response['items'].map((item: any) => {
          //console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      })
    )
  }


}
