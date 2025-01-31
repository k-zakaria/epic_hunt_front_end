import { createAction, props } from '@ngrx/store';
import { Competition } from '../../models/competition';

export const loadCompetitions = createAction('[Competition] Load Competitions', props<{ page: number; size: number }>());
export const loadCompetitionsSuccess = createAction('[Competition] Load Competitions Success', props<{ competitions: Competition[]; total: number }>());
export const loadCompetitionsFailure = createAction('[Competition] Load Competitions Failure', props<{ error: string }>());