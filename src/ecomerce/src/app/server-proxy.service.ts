import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerProxyService {
  private heroesUrl = 'https://us-central1-ecomerce-274711.cloudfunctions.net/helloWorld';
  constructor(private http: HttpClient) {
    this.http.get(this.heroesUrl).toPromise().then( (response) => console.log(response));
   }
}
