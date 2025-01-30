import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';
import { CardCourseComponent } from '../card-course/card-course.component';

@Component({
  selector: 'app-grid-course',
  standalone: true,
  imports: [EditIconComponent, DeleteIconComponent, CardCourseComponent],
  templateUrl: './grid-course.component.html',
  styleUrl: './grid-course.component.css',
})
export class GridCourseComponent {
  @Input({ alias: 'my-courses', required: true }) coursesData: Course[] = [];
  @Output() delete = new EventEmitter();

  requestDeleteCourse(id: number) {
    this.delete.emit({ id });
  }
}
