import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule, ReactiveFormsModule, NgIf ],
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent implements OnInit {
  form: FormGroup;
  userForm: any;
  

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required]),
      massage: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      experience: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
      dob: new FormControl('', [Validators.required ]),
      favoriteColor: new FormControl
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => console.log(value));
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.sendData(this.form.value);
    } else {
      console.log('Form is invalid:', this.form);
    }
  }

  sendData(user: any) {
    this.http.post('http://localhost:8080', user).subscribe(response => {
      console.log('Response:', response);
      this.form?.reset();
    });
  }
}

