import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    loadCompetitions,
    loadCompetitionsFailure,
    loadCompetitionsSuccess,
} from './competition.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CompetitionService } from '../../services/competition.service';

@Injectable()
export class CompetitionEffects {
    private actions$ = inject(Actions);
    private competitionService = inject(CompetitionService);

    loadCompetions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCompetitions),
            mergeMap(({ page, size }) =>
                this.competitionService.getPaginatedCompetition(page, size).pipe(
                    map((res) => loadCompetitionsSuccess({ competitions: res.competitions, total: res.total })),
                    catchError((error) => of(loadCompetitionsFailure({ error: error.message }))),
                )
            )
        )
    )
}