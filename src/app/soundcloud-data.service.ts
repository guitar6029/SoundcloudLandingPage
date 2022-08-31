import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class SoundcloudDataService {

  //example fetches top albums for metallica
  apiRoot : string = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=metallica&api_key=${environment.API_KEY}&format=json`;

  //top charts
  apiTopChart : string = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${environment.API_KEY}&format=json`;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.apiTopChart);
  }


}
