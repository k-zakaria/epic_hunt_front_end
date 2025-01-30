import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-list-github',
  standalone: true,
  templateUrl: './list-github.component.html',
  styleUrls: ['./list-github.component.css'],
})
export class ListGithubComponent {
  @Input() users: User[] = [];
  @Input() deleteUser!: (id: string) => void;
}