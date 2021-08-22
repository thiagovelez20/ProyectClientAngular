import { TestBed } from '@angular/core/testing';

import { CardcreditService } from './cardcredit.service';

describe('CardcreditService', () => {
  let service: CardcreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardcreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
