import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';


const BASE_API_URL = 'https://us-central1-jibliya-cloud-patform-dev.cloudfunctions.net';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CloudFunctionService {

  constructor(public http: HttpClient, private fns: AngularFireFunctions) {

  }

  sendDevis(data: any){
    return this.http.post(BASE_API_URL+'/postDevis', JSON.stringify(data), httpOptions);
  }

  submitDevis(data: any){
     const callable = this.fns.httpsCallable('postDevis');
    let result = callable( data);
    result.toPromise()
    .then( (e: any)=> console.log(e))
    .catch( (e : any) => console.log(e));
  }
}
