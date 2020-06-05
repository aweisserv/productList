import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs'; //Import in order to use an Observable
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Declare an observable variableName$ (courses$) with its : Type (: Observable) and <value>(<Course[]>)
  courses$: Observable<Course[]>;

  //Convert the imported HttpClient method into an object in the constructor
  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {

    console.log(this.coursesService);

    this.courses$ = this.coursesService.loadCourses();
  }

  save(course:Course) {
    this.coursesService.saveCourse(course)
        .subscribe(
          () => console.log("Course saved")
        );
  }

}
