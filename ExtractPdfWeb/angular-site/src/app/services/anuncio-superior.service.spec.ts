import { TestBed, inject } from '@angular/core/testing';

import { AnuncioSuperiorService } from './anuncio-superior.service';

describe('AnuncioSuperiorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnuncioSuperiorService]
    });
  });

  it('should be created', inject([AnuncioSuperiorService], (service: AnuncioSuperiorService) => {
    expect(service).toBeTruthy();
  }));
});
