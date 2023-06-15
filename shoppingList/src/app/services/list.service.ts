import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  url = 'http://localhost:3001/api/';
  constructor(private http: HttpClient) {}
  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'lists');
  }
  addList(data: any) {
    return this.http.post(this.url + 'list', data);
  }
  deleteList(data: any) {
    return this.http.delete(this.url + 'list/' + data);
  }
}
