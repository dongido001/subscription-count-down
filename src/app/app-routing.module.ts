import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {CountDownComponent} from './count-down/count-down.component'

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: CountDownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
