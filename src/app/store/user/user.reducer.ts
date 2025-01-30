import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import { loadUsersSuccess, deleteUserSuccess } from './user.actions';

export interface UserState {
  users: User[];
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  total: 0,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users, total }) => ({
    ...state,
    users,
    total,
    loading: false,
  })),
  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== id),
    loading: false,
  }))
);