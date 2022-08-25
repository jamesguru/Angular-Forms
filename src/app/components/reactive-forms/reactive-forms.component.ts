import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor() {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('John Doe', Validators.min(5)),

      email: new FormControl('johndoe@gmail.com', [
        Validators.email,
        Validators.required,
      ]),

      language: new FormControl('select'),

      password: new FormControl(null, Validators.minLength(8)),

      confirmPassword: new FormControl(null),

      level: new FormControl(null),

      skills: new FormArray([]),
    });
  }

  onAdd() {
    const control = new FormControl('new skill', Validators.required);

    (this.form.get('skills') as FormArray).push(control);
  }

  onSubmit() {
    console.log(this.form);
  }
}
