import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormbuildersComponent } from './components/formbuilders/formbuilders.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

const routes: Routes = [


  {path:'',component:TemplateFormsComponent},

  {path:"reactiveforms", component:ReactiveFormsComponent},

  {path:"formbuilders", component:FormbuildersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
