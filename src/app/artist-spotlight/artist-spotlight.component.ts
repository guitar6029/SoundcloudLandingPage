import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-spotlight',
  templateUrl: './artist-spotlight.component.html',
  styleUrls: ['./artist-spotlight.component.css']
})
export class ArtistSpotlightComponent implements OnInit {

  spotlightArtist : string = 'Wallice';

  constructor() { }

  ngOnInit(): void {
  }

}
