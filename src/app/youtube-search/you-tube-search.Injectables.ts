import { YoutubeSearchService } from './youtube-search.service'

let YOUTUBE_API_KEY: string = 'AIzaSyDJGQ130npCy7-_weGEOn8L3jSG_JUb_p0';
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search"

export const youTubeSearchInjectables: Array<any> = [
    { provide: YoutubeSearchService, useClass: YoutubeSearchService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
]