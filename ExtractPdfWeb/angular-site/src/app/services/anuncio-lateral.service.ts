import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Anuncio } from '../models/anuncio.models'

@Injectable({
  providedIn: 'root'
})
export class AnuncioLateralService {


  private anuncioLateralUrl = 'http://localhost:8001/file/anunciolateral/?format=json';


  constructor(private http: HttpClient) { }

  getAnuncioLateral (): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.anuncioLateralUrl)
      .pipe(
        tap(anuncio => this.log('fetched anuncio Lateral')),
        catchError(this.handleError('getAnuncioLateral', []))
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
