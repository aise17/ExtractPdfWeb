import { TestBed, inject } from '@angular/core/testing';

import { AnuncioLateralService } from './anuncio-lateral.service';

describe('AnuncioLateralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnuncioLateralService]
    });
  });

  it('should be created', inject([AnuncioLateralService], (service: AnuncioLateralService) => {
    expect(service).toBeTruthy();
  }));
});
