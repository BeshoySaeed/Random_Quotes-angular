import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      emailC: new FormControl('', [Validators.required, Validators.email]),
      passC: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      addressC: new FormControl('', [Validators.required]),
      addressC2: new FormControl('', [Validators.required]),
      cityC: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+/),
      ]),
      stateC: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+/),
      ]),
      zipC: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]+/),
      ]),
    });
  }

  submittedForm() {
    console.log(this.form);
    localStorage.setItem('userId', '1');
  }

  ngOnInit() {}
}
