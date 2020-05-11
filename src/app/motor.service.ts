import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Motor} from './model/motor';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MotorService {
  private urlBase="http://localhost:8080/api";
  private headers=new HttpHeaders({'Content-Type':'application/json'}) 
  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { } //inyectado

  getMotorList():  Observable<any>{
    console.log(this.urlBase+"/listar");
    return this.http.get(this.urlBase+"/listar").pipe(
      map(response => response as Motor[])
    );
  } 
  registrar(motor: Motor): Observable<any>{
    console.log( "enviando..");
    return this.http.post(this.urlBase+'/registrar',motor,{headers:this.httpHeaders} );
  }
}
