import { Component, OnInit } from '@angular/core';
import { SoundcloudDataService } from '../soundcloud-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  myData: any;
  constructor(private soundcloud_data: SoundcloudDataService) {
  }
  
  ngOnInit(): void {
    this.soundcloud_data.getData().subscribe((data) => {
      this.myData = data;
      console.log(this.myData);
    });
  }

}
