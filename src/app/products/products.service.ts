import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IProduct } from "./product/product.model";

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient,
                private router: Router) { }

    handlerGetAllProducts(): Observable<IProduct[]> {
        // let usersFora;
        return this.http.get<IProduct[]>(`http://localhost:3001/api/products/all`);
    }

}
