import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [EditIconComponent, DeleteIconComponent],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css',
})
export class CardCourseComponent {
  @Input() course!: Course;
  @Output() delete = new EventEmitter();

  requestDeleteCourse(id: number) {
    this.delete.emit({ id });
  }
}
