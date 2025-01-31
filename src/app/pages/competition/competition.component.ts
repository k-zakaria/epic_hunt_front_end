import { Component, inject } from '@angular/core';
import { CardCompetitionComponent } from '../../components/competition/card-competition/card-competition.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Competition } from '../../models/competition';
import { selectAllCompetitions } from '../../store/competition/competition.selectors';
import { selectError, selectLoading } from '../../store/user/user.selectors';
import { loadCompetitions } from '../../store/competition/competition.actions';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, CardCompetitionComponent],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {
  private store = inject(Store);

  competitions$: Observable<Competition[]> = this.store.select(selectAllCompetitions);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<String | null> = this.store.select(selectError);

  page: number = 1;
  size: number = 20;

  ngOnInit() {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.store.dispatch(loadCompetitions({page: this.page, size: this.size}))
  }

}
