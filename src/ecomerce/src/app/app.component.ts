import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { CloudFunctionService } from './services/cloud-function.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecomerce';

 // data: String = 'hello from Hard codded value';
  constructor( private store: AngularFirestore, private fns: AngularFireFunctions, public cloudFNService: CloudFunctionService ){

  }
  ngOnInit(): void {
     //const callable = this.fns.httpsCallable('helloContent');
    // callable( { name: "jamal"}).toPromise().then( (e)=> console.log(e)).catch( (e) => console.log(e));
     
    //  let data: any = {
    //   name: "jamal",
    //   adress: "32 avenue"
    //  }
    //  this.cloudFNService.sendDevis(data).toPromise().then(result => console.log('sendDevis results : ', result))
    //  .catch(error => console.log('sendDevis results : ', error));
    console.log("rinning in local");
    
  }


}
