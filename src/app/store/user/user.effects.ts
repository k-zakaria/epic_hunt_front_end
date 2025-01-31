import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GithubApiService } from '../../services/github-api.service';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private githubApiService = inject(GithubApiService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(({ page, size }) =>
        this.githubApiService.getPaginatedUsers(page, size).pipe(
          map((res) => loadUsersSuccess({ users: res.users, total: res.total })),
          catchError((error) => of(loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap(({ id }) =>
        this.githubApiService.deleteUser(id).pipe(
          map(() => deleteUserSuccess({ id })),
          catchError((error) => of(deleteUserFailure({ error: error.message })))
        )
      )
    )
  );
}