import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CompetitionState } from "../../models/competition";

export const selectCompetitionState = createFeatureSelector<CompetitionState>('competitions');

export const selectAllCompetitions = createSelector(selectCompetitionState, (state) => state.competitions);
export const selectTotalCompetitions = createSelector(selectCompetitionState, (state) => state.total);
export const selectLoading = createSelector(selectCompetitionState, (state) => state.loading);
export const selectError = createSelector(selectCompetitionState, (state) => state.error);