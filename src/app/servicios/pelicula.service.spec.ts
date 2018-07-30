import { TestBed, inject } from '@angular/core/testing';

import { PeliculaService } from './pelicula.service';

describe('PeliculaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculaService]
    });
  });

  it('should be created', inject([PeliculaService], (service: PeliculaService) => {
    expect(service).toBeTruthy();
  }));
});
