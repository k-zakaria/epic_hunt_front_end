import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Notification } from '../../models/notification';
import { EditIconComponent } from '../../components/icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../components/icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    EditIconComponent,
    DeleteIconComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  notify: boolean = false;

  notification: Notification = {
    message: '',
    position: '',
    alertClass: '',
    duration: 3000,
  };

  title = 'Master you Day!';

  todoIndex: number = -1;

  defaultTodo = 'Write a todo...';

  editable = false;

  showForm: boolean = false;

  myTodo: string = '';

  todos: string[] = ['Learn angular', 'Reactjs', 'Svelte', 'Spring boot'];

  submit() {
    if (!this.validateTodo()) {
      return;
    }

    if (this.editable) {
      this.updateTodo();
    } else {
      this.addTodo();
    }
  }

  addTodo() {
    this.todos = [this.myTodo, ...this.todos];
    this.initTodo();
    this.triggerNotify({
      message: 'Todo created Successfuly',
      position: 'toast-end',
      alertClass: 'alert-success',
      duration: 3000,
    });
  }

  triggerNotify(customNotify: Notification) {
    this.notification = {
      ...customNotify,
    };

    this.notify = true;

    setTimeout(() => {
      this.notify = false;
    }, this.notification.duration);
  }

  editTodo(todo: string, index: number) {
    this.myTodo = todo;
    this.showForm = true;
    this.editable = true;
    this.todoIndex = index;
  }

  updateTodo() {
    if (this.todoIndex >= 0) {
      this.todos[this.todoIndex] = this.myTodo;
      this.initTodo();
      this.triggerNotify({
        message: 'Todo updated Successfuly',
        position: 'toast-bottom toast-start',
        alertClass: 'alert-warning',
        duration: 3000,
      });
    }
  }

  deleteTodo(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete a Todo!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todos = this.todos.filter((item, i) => i !== index);
        this.triggerNotify({
          message: 'Todo deleted Successfuly',
          position: 'toast-end',
          alertClass: 'alert-error',
          duration: 50000,
        });

        Swal.fire({
          title: 'Todo is Deleted!',
          text: 'Your todo has been deleted.',
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
    // if (confirm('Are you  sure to delete this todo  ?')) {
    //   this.todos = this.todos.filter((item, i) => i !== index);
    // }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  changeToggleBtn() {
    return this.showForm ? 'Hide' : 'Show';
  }

  initTodo() {
    this.myTodo = '';
    this.editable = false;
    this.showForm = false;
    this.todoIndex = -1;
  }

  cancel() {
    this.initTodo();
    this.triggerNotify({
      message: 'Update is canceled',
      position: 'toast-end',
      alertClass: 'alert-neutral',
      duration: 2000,
    });
  }

  validateTodo() {
    if (!this.myTodo) {
      this.triggerNotify({
        message: 'Please check the data into a input, Todo  is required!!',
        alertClass: 'alert-error',
        position: 'toast-end',
        duration: 3000,
      });
      return false;
    }
    return true;
  }
}
