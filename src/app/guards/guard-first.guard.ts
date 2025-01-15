import { CanActivateFn } from '@angular/router';

export const guardFirstGuard: CanActivateFn = (route, state) => {
  return true;
};
