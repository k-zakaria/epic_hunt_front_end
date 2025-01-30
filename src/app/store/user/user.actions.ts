import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const loadUsers = createAction('[User] Load Users', props<{ page: number; size: number }>());
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[]; total: number }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: string }>());