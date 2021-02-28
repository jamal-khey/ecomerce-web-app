import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecomerce';
  private url = 'https://us-central1-ecomerce-274711.cloudfunctions.net/helloWorld';
  
 // data: String = 'hello from Hard codded value';
  constructor( private store: AngularFirestore, private fns: AngularFireFunctions, private http: HttpClient){

    // const todo = this.store.collection('todo').valueChanges({ idField: 'id' });
    
   
    

  }
  ngOnInit(): void {
     const callable = this.fns.httpsCallable('helloWorld');
     callable({ name: 'some-data' }).toPromise().then( (e)=> console.log(e));
   

  }
}
