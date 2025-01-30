import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();
  
  if (authService.getAccessToken()) {
    req = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
  }
  return next(req);
};
