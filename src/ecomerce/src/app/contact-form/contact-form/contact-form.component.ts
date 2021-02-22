import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    email:  new FormControl('', [Validators.required, Validators.email]),
  });

  

  constructor(private fb: FormBuilder) { }

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
