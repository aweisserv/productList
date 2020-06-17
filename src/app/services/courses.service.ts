import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs'; //Import in order to use an Observable
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  headers = new Headers();
  constructor(private http: HttpClient) {

      console.log("Creando servicio"); //Allows to confirm the creation of this service successfully
   }
   loadCourses(): Observable<Product[]> {
    
    const headers = new HttpHeaders()
      .set('access_token', '22636ca690d932cc523065f4b3dea68ed3184bdb');

    const params = new HttpParams()
    //  .set("search_text", '2');
    // .set("pageSize", "10");

    return this.http.get<Product[]>( "http://ec2-54-183-147-121.us-west-1.compute.amazonaws.com:8383/v2/markets/1/collection/2/market_info.json?&mkId=1&collId=2&priceList=6", { headers, params } );
   }

   saveLocalStorage(product: Product){

    let productSelected = product;

    localStorage.setItem( "product", JSON.stringify(productSelected) );




  //  const headers = new HttpHeaders()
  //    .set('access_token', '22636ca690d932cc523065f4b3dea68ed3184bdb');

  //  return this.http.put( `/api/courses/${product.id}`, product );

   }
}
