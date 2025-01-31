import { Component, Input, input } from '@angular/core';
import { Competition } from '../../../models/competition';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-competition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-competition.component.html',
  styleUrl: './card-competition.component.css'
})
export class CardCompetitionComponent {
  @Input() competitions: Competition[] = [];
}
