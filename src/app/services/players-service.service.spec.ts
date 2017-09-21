import { TestBed, inject } from '@angular/core/testing';

import { PlayersServiceService } from './players-service.service';

describe('PlayersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersServiceService]
    });
  });

  it('should be created', inject([PlayersServiceService], (service: PlayersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
