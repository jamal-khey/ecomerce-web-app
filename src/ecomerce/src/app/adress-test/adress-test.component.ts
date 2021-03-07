import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/functions';
import { HttpClientModule } from '@angular/common/http';
import { CloudFunctionService } from '../services/cloud-function.service';


@Component({
  selector: 'app-adress-test',
  templateUrl: './adress-test.component.html',
  styleUrls: ['./adress-test.component.scss']
})
export class AdressTestComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    productType: null,
    productLink: null,
    company: null,
    address: null,
    address2: null,
    city: null,
    state: null,
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    { name: 'Agadir', abbreviation: 'AL' },
    { name: 'Rabat', abbreviation: 'AK' },
    { name: 'Casablanca', abbreviation: 'AS' },
    { name: 'Titouane', abbreviation: 'AZ' },
    { name: 'Fes', abbreviation: 'AR' },
    { name: 'Wejda', abbreviation: 'CA' },
  ];


  productsTypes = [
    { name: 'mode' },
    { name: 'electronic' },
    { name: 'food' }
  ];
  constructor(private fb: FormBuilder, private cfs: CloudFunctionService) { }

  onSubmit() {
   

    console.log(this.addressForm.value);
    this.cfs.sendDevis(this.addressForm.value)
    this.cfs.submitDevis(this.addressForm.value);
    
  }
}
