import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';
import { ListGithubComponent } from '../list-github/list-github.component';

@Component({
  selector: 'app-card-github',
  standalone: true,
  imports: [],
  templateUrl: './card-github.component.html',
  styleUrl: './card-github.component.css',
})
export class CardGithubComponent {
  @Input({ required: true }) user!: User;
}
