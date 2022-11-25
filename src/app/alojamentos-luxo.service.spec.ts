import { TestBed } from '@angular/core/testing';

import { AlojamentosLuxoService } from './alojamentos-luxo.service';

describe('AlojamentosLuxoService', () => {
  let service: AlojamentosLuxoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlojamentosLuxoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
