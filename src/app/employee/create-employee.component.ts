import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [""],
      skills: this.fb.group({
        skillName: [""],
        experienceInYears: [""],
        proficiency: [""]
      })
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }

  onLoadDataClick(): void {
    this.employeeForm.patchValue({
      fullName: "Pritam Vijay Kamble",
      email: "7276279026.pk@gmail.com"
      // skills: {
      //   skillName: 'MEAN stack',
      //   experienceInYears: '2',
      //   proficiency: 'beginner'
      // }
    });
  }
}
