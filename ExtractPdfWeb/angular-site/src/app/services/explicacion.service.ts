import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Explicacion } from '../models/explicacion.models'
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExplicacionService {

  private explicacionUrl = 'http://localhost:8001/file/explicacion/';


  constructor(private http: HttpClient) { }

  getExplicacion(): Observable<Explicacion>{

    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get<Explicacion>(this.explicacionUrl)
      .pipe(
        catchError(this.handleError<Explicacion>('getExplicacion'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(entrada: string){
    console.log(entrada);
  }



}
