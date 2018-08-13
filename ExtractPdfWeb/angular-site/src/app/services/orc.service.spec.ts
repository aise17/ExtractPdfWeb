import { TestBed, inject } from '@angular/core/testing';

import { OrcService } from './orc.service';

describe('OrcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrcService]
    });
  });

  it('should be created', inject([OrcService], (service: OrcService) => {
    expect(service).toBeTruthy();
  }));
});
