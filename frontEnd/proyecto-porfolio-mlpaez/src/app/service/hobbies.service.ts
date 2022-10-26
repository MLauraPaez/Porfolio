import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hobbies } from '../model/hobbies';


@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  URL =  environment.URL + 'hobbies/';

    constructor(private httpClient : HttpClient) { }
  
    public lista(): Observable<Hobbies[]>{
      return this.httpClient.get<Hobbies[]>(this.URL + 'lista');
    }
  
    public detail(id: number): Observable<Hobbies>{
      return this.httpClient.get<Hobbies>(this.URL + `detail/${id}`);
    }
  
    public save(hobbies: Hobbies): Observable<any>{
      return this.httpClient.post<any>(this.URL + 'create', hobbies);
    }
  
    public update(id: number, hobbies: Hobbies): Observable<any>{
      return this.httpClient.put<any>(this.URL + `update/${id}`, hobbies);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
  }