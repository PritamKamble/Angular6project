import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EmailValidator, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public name = "Codevolution";
    public message = "welcome to codevolution";
    public person = {
      "firstname" : "pritam",
      "lastname" : "kamble"
    }










  constructor() {}

  ngOnInit() {
  }


}
