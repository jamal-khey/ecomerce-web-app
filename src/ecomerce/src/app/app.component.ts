import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecomerce';

 // data: String = 'hello from Hard codded value';
  constructor( private store: AngularFirestore, private fns: AngularFireFunctions){

  }
  ngOnInit(): void {
     const callable = this.fns.httpsCallable('helloContent');
     callable( { name: "jamal"}).toPromise().then( (e)=> console.log(e)).catch( (e) => console.log(e));
     
    
  }
}
