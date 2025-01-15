import { CanDeactivateFn } from '@angular/router';

export const guardThirdGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
