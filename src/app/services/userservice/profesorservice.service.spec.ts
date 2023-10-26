import { TestBed } from '@angular/core/testing';

import { ProfesorserviceService } from './profesorservice.service';

describe('ProfesorserviceService', () => {
  let service: ProfesorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
