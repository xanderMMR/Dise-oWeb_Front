import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotorListComponent } from './motor-list/motor-list.component';
import { CreateMotorComponent } from './create-motor/create-motor.component';


const routes: Routes = [
  {path: '',redirectTo: 'customer',pathMatch:'full'},
  {path: 'list',component: MotorListComponent},
  {path:'new',component:CreateMotorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
