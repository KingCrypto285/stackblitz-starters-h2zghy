import { Component } from '@angular/core';
import { Course } from './Course';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { COURSES } from '../test-course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  coursed: Course[] = [
    {
      course_id: 1,
      course_title: 'Web Development',
      semester: 1,
      period: 1,
      lecturer: 'Dr. John Doe',
    },
  ];
  courses: Course[] = COURSES;

  selectedCourse?: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }
}
