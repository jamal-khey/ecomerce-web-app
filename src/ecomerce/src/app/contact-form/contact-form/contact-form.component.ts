import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  tel: FormControl = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:  new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() { }

  ngOnInit(): void {
  }


 
  getErrorMessage() {
    if (this.profileForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.profileForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
