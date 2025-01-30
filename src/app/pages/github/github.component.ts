import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers, deleteUser } from '../../store/user/user.actions';
import { selectAllUsers, selectLoading, selectError } from '../../store/user/user.selectors';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { ListGithubComponent } from '../../components/github/list-github/list-github.component';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, ListGithubComponent],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent {
  private store = inject(Store);

  users$: Observable<User[]> = this.store.select(selectAllUsers);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<string | null> = this.store.select(selectError);

  page: number = 1;
  size: number = 10;

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(loadUsers({ page: this.page, size: this.size }));
  }

  onDeleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(deleteUser({ id }));
    }
  }
}