import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyBannerComponent } from './ready-banner.component';

describe('ReadyBannerComponent', () => {
  let component: ReadyBannerComponent;
  let fixture: ComponentFixture<ReadyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
