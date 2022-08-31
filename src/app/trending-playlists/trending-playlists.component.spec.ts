import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPlaylistsComponent } from './trending-playlists.component';

describe('TrendingPlaylistsComponent', () => {
  let component: TrendingPlaylistsComponent;
  let fixture: ComponentFixture<TrendingPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
