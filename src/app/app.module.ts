import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrendingPlaylistsComponent } from './trending-playlists/trending-playlists.component';
import { HttpClientModule } from '@angular/common/http';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { TopAlbumsComponent } from './top-albums/top-albums.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { CreatorsBannerComponent } from './creators-banner/creators-banner.component';
import { ArtistSpotlightComponent } from './artist-spotlight/artist-spotlight.component';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    TrendingPlaylistsComponent,
    TopArtistsComponent,
    TopAlbumsComponent,
    SearchComponent,
    NavComponent,
    CreatorsBannerComponent,
    ArtistSpotlightComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
