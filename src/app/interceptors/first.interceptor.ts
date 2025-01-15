import { HttpInterceptorFn } from '@angular/common/http';

export const firstInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
