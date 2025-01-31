import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './store/user/user.reducer';
import { UserEffects } from './store/user/user.effects';
import { authInterceptor } from './interceptors/auth.interceptor';
import { CompetitionEffects } from './store/competition/competition.effects';
import { competitionReducer } from './store/competition/competition.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(),
    provideStore({ competitions: competitionReducer, users: userReducer }), // Fusion des reducers
    provideEffects([CompetitionEffects, UserEffects]), // Fusion des effects
  ],
};