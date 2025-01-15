import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { guardThirdGuard } from './guard-third.guard';

describe('guardThirdGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardThirdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
