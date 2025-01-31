import { createReducer, on } from '@ngrx/store';
import { loadCompetitionsSuccess } from './competition.actions';
import { CompetitionState } from '../../models/competition';

export const initialState: CompetitionState = {
    competitions: [],
    total: 0,
    loading: false,
    error: null,
};

export const competitionReducer = createReducer(
    initialState,
    on(loadCompetitionsSuccess, (state, { competitions, total }) => ({
        ...state,
        competitions,
        total,
        loading: false,
    }))
)