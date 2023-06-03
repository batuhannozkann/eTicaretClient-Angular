import { TestBed } from '@angular/core/testing';

import { ToastrpackageService } from './toastrpackage.service';

describe('ToastrpackageService', () => {
  let service: ToastrpackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrpackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
