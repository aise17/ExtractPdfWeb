import { TestBed, inject } from '@angular/core/testing';

import { ExplicacionService } from './explicacion.service';

describe('ExplicacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExplicacionService]
    });
  });

  it('should be created', inject([ExplicacionService], (service: ExplicacionService) => {
    expect(service).toBeTruthy();
  }));
});
