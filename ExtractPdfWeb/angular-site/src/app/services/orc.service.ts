import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';

import { Explicacion } from '../models/explicacion.models';
import { catchError, map, tap } from 'rxjs/operators';
import { Orc } from '../models/orc.models';
import { Http, ResponseContentType, RequestOptions } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data'})
  
};

@Injectable({
  providedIn: 'root'
})
export class OrcService {

  private fileUrl = 'http://localhost:8001/file/upload/';
  private explicacionUrl = 'http://localhost:8001/file/explicacion/?format=json';

  

  constructor(private http: HttpClient) { }


  addFile (orc: Orc): Observable<Response> {


    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'plain/text');
    headers.append('responseType', 'blob');


    let fd = new FormData();
    fd.append("descripcion", orc.descripcion);
    fd.append("documento", orc.documento);
    fd.append("proceso", orc.proceso);


    console.log(orc);
    return this.http.post<Response>(this.fileUrl, fd,{headers: headers}  ).pipe(
      tap((res: Response) => this.log(`added file w/ id=${res}`)),
      catchError(this.handleError<Response>('addFile'))
    );
  }



  postForm( body: Orc) {
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Content-Type', 'application/form-data');
    headers.append('Accept', 'application/json');



    return this.http.post<Orc>(this.fileUrl, body, {headers: headers }).pipe(
      tap((res:string) => console.log(res) ),
      catchError(this.handleError<Orc>('addFile'))
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
