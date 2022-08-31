import { Component, OnInit } from '@angular/core';
import { SoundcloudDataService } from '../soundcloud-data.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css']
})
export class TopArtistsComponent implements OnInit {


  topArtists : any [] = [
    { 
      name : 'Bad Bunny',
      image :"https://charts-static.billboard.com/img/2017/08/bad-bunny-c3m-artist-chart-2ep-180x180.jpg"
    },
    { 
      name : 'Harry Styles',
      image :"https://charts-static.billboard.com/img/2017/04/harry-styles-psx-artist-chart-rzg-180x180.jpg"
    },
    { 
      name : 'Morgan Wallen',
      image :"https://charts-static.billboard.com/img/2018/01/morgan-wallen-nlu-artist-chart-zuy-180x180.jpg"
    },
    { 
      name : 'Beyonce',
      image :"https://charts-static.billboard.com/img/2006/12/beyonce-000-artist-chart-cci-180x180.jpg"
    },
    { 
      name : 'Drake',
      image :"https://charts-static.billboard.com/img/2009/04/drake-04g-180x180.jpg"
    },
    { 
      name : 'Luke Combs',
      image :"https://charts-static.billboard.com/img/2017/03/luke-combs-9dm-artist-chart-501-180x180.jpg"
    },
    { 
      name : 'The Weeknd',
      image :"https://charts-static.billboard.com/img/2013/12/the-weeknd-xmx-artist-chart-uxt-180x180.jpg"
    },
    

  ]

  
  myData: any;
  constructor(private lastfm_data: SoundcloudDataService) {
  }
  
  ngOnInit(): void {
    // this.lastfm_data.getData().subscribe((data) => {
    //   this.myData = data;
    //   console.log(this.myData);
    // });
  }
}
