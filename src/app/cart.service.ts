import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getRequest(): Observable<any> {
    return this.http.get("http://localhost:7000/cart-items");
  }

  postRequest(newItem: object): Observable<any> {
    return this.http.post(`http://localhost:7000/cart-items`, newItem);
  }

  putRequest(itemToEdit: object, id: number): Observable<any> {
    return this.http.put(`http://localhost:7000/cart-items/${id}`, itemToEdit);
  }

  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`http://localhost:7000/cart-items/${id}`);
  }
}

