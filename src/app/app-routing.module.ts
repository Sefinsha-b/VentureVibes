import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LobbyComponent } from './component/lobby/lobby.component';
import { FormComponent } from './component/form/form.component';
import { Form2Component } from './component/form2/form2.component';
import { Form3Component } from './component/form3/form3.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full' },
  { path:'dashboard', component: DashboardComponent },
  { path:'signup', component: SignupComponent },
  { path:'lobby', component: LobbyComponent },
  { path:'form', component: FormComponent },
  { path:'form2', component: Form2Component },
  { path:'form3', component: Form3Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
