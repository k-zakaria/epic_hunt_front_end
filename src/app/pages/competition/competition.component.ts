import { Component } from '@angular/core';
import { CardCompetitionComponent } from '../../components/competition/card-competition/card-competition.component';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CardCompetitionComponent],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {

}
