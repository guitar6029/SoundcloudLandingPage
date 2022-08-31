import { TestBed } from '@angular/core/testing';

import { SoundcloudDataService } from './soundcloud-data.service';

describe('SoundcloudDataService', () => {
  let service: SoundcloudDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundcloudDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
