import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      name: new FormControl(null, [
        Validators.required,
        this.checkName.bind(this),
      ]),

      email: new FormControl(
        'johndoe@gmail.com',
        [Validators.required, Validators.email],
        this.checkEmails.bind(this) as AsyncValidatorFn
      ),

      language: new FormControl('select'),

      password: new FormControl(null, Validators.minLength(8)),

      confirmPassword: new FormControl(null),

      level: new FormControl(null),

      skills: new FormArray([]),
    });
  }

  unallowednames = ['Angular', 'react', 'snooze', 'break', 'waterfield'];

  unallowedemails = [
    'test@gmail.com',
    'helloo@gmail.com',
    'test@gmail.com',
    'why@gmail.com',
  ];

  onAdd() {
    const control = new FormControl('new skill', Validators.required);

    (this.form.get('skills') as FormArray).push(control);
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.form);
  }

  onRemove(i: number) {
    (this.form.get('skills') as FormArray).removeAt(i);
  }

  checkName(control: FormControl): { [s: string]: boolean } | null {
    if (this.unallowednames.includes(control.value)) {
      return { nameForbidden: true };
    }

    return null;
  }

  checkEmails(control: FormControl): Promise<{ [s: string]: boolean } | null> {
    const promise = new Promise<{ [s: string]: boolean } | null>(
      (resolve, reject) => {
        setTimeout(() => {
          if (this.unallowedemails.includes(control.value)) {
            resolve({ unallowedEmail: true });
          }

          resolve(null);
        });
      }
    );

    return promise;
  }

  onUpdate() {
    this.form.setValue({
      name: 'James K',

      email: 'jameskagunga15@gmail.com',

      level: 'Pro',
    });

    this.form.reset();
  }
}
