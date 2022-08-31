import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsBannerComponent } from './creators-banner.component';

describe('CreatorsBannerComponent', () => {
  let component: CreatorsBannerComponent;
  let fixture: ComponentFixture<CreatorsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
