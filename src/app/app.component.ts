import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
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

  //Declare an observable variableName$ (courses$) with its : Type (: Observable) and <value> (<Course[]>)
  products$: Observable<any>;

  courrentDate = new Date();
  //Convert the imported HttpClient method into an object in the constructor
  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {

    console.log(this.coursesService);

    this.products$ = this.coursesService.loadCourses();
    
  }

  save(product: Product) {

    this.coursesService.saveLocalStorage(product)

  }

}
