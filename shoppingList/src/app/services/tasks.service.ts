import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url = 'http://localhost:3001/api/';
  constructor(private http: HttpClient) {}
  getTasks(listId: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'tasks/' + listId);
  }
  addTask(data: any) {
    return this.http.post(this.url + 'task', data);
  }
  getTask(data: any) {
    return this.http.get(this.url + 'task/' + data);
  }
}
