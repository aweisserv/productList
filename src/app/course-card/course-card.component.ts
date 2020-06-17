import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {Product} from '../model/product';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

    @Input()
    product: Product;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    productEmitter = new EventEmitter<Product>();


    constructor( private coursesService: CoursesService ) {

    }

    ngOnInit() {
        console.log("Courses services by component");

    }

    isImgVisible() {
        return this.product && this.product.urlImg;
      }

    onSaveClicked() {
        
        console.log("Componente de la carta cliqueado");

        return this.productEmitter.emit( { ...this.product } );
    }

    cardClasses() {
        return {
        'beginner':this.product.variant.finalPrice <= 3000, 
        'intermediate':this.product.variant.finalPrice > 3000 && this.product.variant.finalPrice <= 5000,
        'advanced':this.product.variant.finalPrice > 5000,
        'card-box':true
        }    
    };

}
