import { TestBed, inject } from '@angular/core/testing';

import { ProgramService } from './program.service';

describe('ProgramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramService]
    });
  });

  it('should ...', inject([ProgramService], (service: ProgramService) => {
    expect(service).toBeTruthy();
  }));
});
