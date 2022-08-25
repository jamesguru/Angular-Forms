import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('form') form!:NgForm; 

  templateemail: any;


  onSubmit(){


    console.log(this.form);



    this.form.setValue({

      email:"ndungu@gmail.com",

      password:'1234567899'
    })

    // this.form.reset()

  }


 // template(templateemail:any){

    //this.templateemail = templateemail;

    //console.log(this.templateemail)
  //}

}
