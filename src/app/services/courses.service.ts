import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs'; //Import in order to use an Observable
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
      console.log("Creating service"); //Allows to confirm the creation of this service successfully
   }
   loadCourses(): Observable<Course[]> {
     
    const params = new HttpParams()
     .set("page", "1")
     .set("pageSize", "10");

    return this.http.get<Course[]>('/api/courses', {params});
   }
}
