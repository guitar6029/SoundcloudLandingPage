import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.css'],
})
export class TopAlbumsComponent implements OnInit {

  title: string = 'Trending Albums';
  topAlbums: any[] = [
    {
      name: 'Un Verano Sin Ti',
      artist: 'Bad Bunny',
      image : 'https://charts-static.billboard.com/img/2022/05/bad-bunny-c3m-un-verano-sin-ti-3ib-180x180.jpg'
    },
    {
      name: 'Beatiful Mind',
      artist: 'Rod Wave',
      image : 'https://charts-static.billboard.com/img/2019/06/rod-wave-qt2-180x180.jpg'
    },
    {
      name: 'Renaissance',
      artist: 'Beyonce',
      image: 'https://charts-static.billboard.com/img/2022/08/beyonce-0na-renaissance-jae-180x180.jpg'
    },
    {
      name: 'Dangerous: The Double Album',
      artist: 'Morgan Wallen',
      image: 'https://charts-static.billboard.com/img/2021/01/morgan-wallen-nlu-dangerous-the-double-album-zbn-180x180.jpg'
    },
    {
      name: 'Harrys House',
      artist: 'Harry Styles',
      image: 'https://charts-static.billboard.com/img/2022/06/harry-styles-bma-harrys-house-9jt-180x180.jpg'
    },
    {
      name : 'The Last Slimeto',
      artist: 'YoungBoy Never Broke Again',
      image: 'https://charts-static.billboard.com/img/2017/06/youngboy-never-broke-again-3oj-180x180.jpg'
    },
    {
      name: 'The Highlights',
      artist: 'The Weeknd',
      image: 'https://charts-static.billboard.com/img/2021/02/the-weeknd-xmx-the-highlights-ax5-180x180.jpg'
    }
];

  constructor() {}

  ngOnInit(): void {}
}
