import { Component } from '@angular/core';
import { FormCourseComponent } from '../../components/courses/form-course/form-course.component';
import { ListCourseComponent } from '../../components/courses/list-course/list-course.component';
import { GridCourseComponent } from '../../components/courses/grid-course/grid-course.component';
import { Course } from '../../models/course';
import { AddIconComponent } from '../../components/icons/add-icon/add-icon.component';
import { ceil, random, range, slice } from 'lodash';
import { FormsModule } from '@angular/forms';
import { JsonPipe, KeyValuePipe, NgClass, PercentPipe } from '@angular/common';
import { courseList } from '../../data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    FormCourseComponent,
    ListCourseComponent,
    GridCourseComponent,
    AddIconComponent,
    FormsModule,
    NgClass,
    KeyValuePipe,
    JsonPipe,
    PercentPipe,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  taux: number = 0.75;

  courses: Course[] = courseList;

  list: boolean = true;

  showForm: boolean = false;

  courseTemp!: Course;

  edit: boolean = false;

  perPage: number = 6;

  pages: number[] = [];

  currentPage!: number;

  ngOnInit() {
    this.initPaginate();
  }

  initPaginate() {
    this.pages = range(1, ceil(courseList.length / this.perPage) + 1);
    this.paginate();
  }

  paginate(page: number = 1) {
    this.currentPage = page;
    const perPage = +this.perPage;
    const offset = (page - 1) * perPage;
    this.courses = slice(courseList, offset, offset + perPage);

    console.log(offset, this.perPage);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  changeView(etat: boolean) {
    this.list = etat;
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  saveCourse(course: Course) {
    let myCourse: Course = {
      ...course,
      id: random(10, 200),
    };
    this.courses = [myCourse, ...this.courses];
    this.toggleForm();
    this.initCourse();
  }

  retreiveCourse(course: Course) {
    this.courseTemp = course;
    this.showForm = true;
    this.edit = true;
  }

  updateCourse(course: Course) {
    this.courses = this.courses.map((item) =>
      item.id === course.id ? course : item
    );

    this.initCourse();

    this.showForm = false;
    this.edit = false;

    console.log(this.courses, 'update mode');
  }

  initCourse() {
    this.courseTemp = {
      title: '',
      url: '',
      price: 0,
      content: '',
      active: false,
    };
  }
}
