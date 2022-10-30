import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idiomas } from '../model/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  URL = environment.URL + 'idiomas/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable <Idiomas[]>{
    return this.httpClient.get<Idiomas[]>(this.URL + 'lista');
  } 

  public detail(id: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `detail/${id}`);
  }
  
  public save(idiomas:Idiomas): Observable<any>{
    return this.httpClient.post<any>(this.URL+ 'create', idiomas);
  }
  
  public update(id: number, idiomas: Idiomas): Observable<any>{
    return this.httpClient.put<any>(this.URL +`update/${id}`,idiomas);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }


}
