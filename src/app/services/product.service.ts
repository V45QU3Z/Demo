import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  refreshTable = new Subject<Product>();
  url = `${environment.BASE_URL}/product`;
  constructor( private http: HttpClient) { }


  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  getAllById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}`, product);
  }

  update(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}/${product.id}`, product);
  }

  delete(id: string): Observable<Product>{
    return this.http.delete<Product>(`${this.url}/${id}`);
  }
}
