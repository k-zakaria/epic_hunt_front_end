import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../models/user';


export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(selectUserState, (state) => state.users);
export const selectTotalUsers = createSelector(selectUserState, (state) => state.total);
export const selectLoading = createSelector(selectUserState, (state) => state.loading);
export const selectError = createSelector(selectUserState, (state) => state.error);