import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3001/api/v1';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getallproducts`).pipe(
      tap((response) => console.log('📌 API Response in Service:', response)) // Debugging
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/createproduct`, product);
  }

  getProductById(id: number): Observable<Product> {
    console.log(`📌 Fetching product from API for ID: ${id}`); // Debugging
    return this.http.get<Product>(`${this.apiUrl}/getproduct/${id}`);
  }
  

  updateProduct(productId: number, product: Product): Observable<Product> {
    console.log('📌 Sending Update Request:', product); // Debugging log
    return this.http.put<Product>(`${this.apiUrl}/updproduct/${product.productid}`, product);
  }

  deleteProduct(productid: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delproduct/${productid}`);
  }
}
