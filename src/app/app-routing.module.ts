import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentComponent },
  {path: 'employees', component: EmplistComponent},
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentComponent,
                                  EmplistComponent,
                                  PageNotFoundComponent];
