import { TestBed, inject } from '@angular/core/testing';

import { AnuncioInferiorService } from './anuncio-inferior.service';

describe('AnuncioInferiorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnuncioInferiorService]
    });
  });

  it('should be created', inject([AnuncioInferiorService], (service: AnuncioInferiorService) => {
    expect(service).toBeTruthy();
  }));
});
