import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    EmployeedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
