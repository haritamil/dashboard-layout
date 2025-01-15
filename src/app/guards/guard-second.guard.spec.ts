import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { guardSecondGuard } from './guard-second.guard';

describe('guardSecondGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardSecondGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
