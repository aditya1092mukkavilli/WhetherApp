import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeWhetherService {

  constructor(private http: HttpClient) { }

  GetWhetherDetails(){
     return this.http.get<any>(environment.whetherConsumeURL).pipe(
      catchError(this.handleError<any>('getWhetherDetails',[]))
    );
  }
  handleError<T>(operation = 'operation', result?: T){
    return (error:any): any => {
      console.log(error);
    }
  }

}
