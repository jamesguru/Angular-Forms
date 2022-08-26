import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilders',
  templateUrl: './formbuilders.component.html',
  styleUrls: ['./formbuilders.component.css']
})
export class FormbuildersComponent implements OnInit {




  form!:FormGroup;

  constructor(private fb:FormBuilder) { 



  }


  

  ngOnInit(): void {


    this.form = this.fb.group({


      name:[null, Validators.required,this.checkSpecialCharacters],

      password:[null,Validators.required, this.checkNumber],

      confirmPassword:[null,Validators.required, this.checkNumber]


    })
  }


  onSubmit(){

    console.log(this.form)
  }


  checkSpecialCharacters(control:FormControl):{[s:string]:boolean}| null {


    const value = control.value;

    const special = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g.test(value);


    return !special? {special:true}:null;


  }

  checkNumber(control:FormControl):{[s:string]:boolean}| null{



    const value = control.value;

    const number = /[0-9]+/.test(value);

    return !number? {number:true}:null;
  }

}
