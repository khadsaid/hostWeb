import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [{
  path:'',component:LoginComponent
},
{
  path:'index',component:IndexComponent
},{
  path:'dash',component:DashComponent
},
{
  path:'table',component:TableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
