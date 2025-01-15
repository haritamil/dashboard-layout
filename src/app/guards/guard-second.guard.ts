import { CanActivateChildFn } from '@angular/router';

export const guardSecondGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
