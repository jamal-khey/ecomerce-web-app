import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerce';
  private heroesUrl = 'https://us-central1-ecomerce-274711.cloudfunctions.net/helloWorld';
 // data: String = 'hello from Hard codded value';
  constructor( private store: AngularFirestore, private fns: AngularFireFunctions, private http: HttpClient){

    // const todo = this.store.collection('todo').valueChanges({ idField: 'id' });
    
    // const callable = fns.httpsCallable('helloWorld');
    // callable({ name: 'some-data' }).toPromise().then( (result ) => {
    //   console.log('**********');
    //   console.log(result);
    // }).catch((e)=> console.log(e));

    this.http.get(this.heroesUrl).toPromise().then( (response) => console.log(response));

  }
}
