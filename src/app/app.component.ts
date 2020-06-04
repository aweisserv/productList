import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs'; //Import in order to use an Observable
import { HttpClient, HttpParams } from '@angular/common/http'; //Import in order to use http method with params

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Declare an observable variableName$ (courses$) with its : Type (: Observable) and <value>(<Course[]>)
  courses$: Observable<Course[]>;

  //Convert the imported HttpClient method in the constructor
  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");
    

    this.courses$ = this.http.get<Course[]>('/api/courses', {params});
  }

}
