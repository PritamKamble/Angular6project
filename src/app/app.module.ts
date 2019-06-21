import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { DepartmentComponent } from './department/department.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptdetailComponent } from './deptdetail/deptdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DepartmentComponent,
    EmplistComponent,
    PageNotFoundComponent,
    DeptdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
