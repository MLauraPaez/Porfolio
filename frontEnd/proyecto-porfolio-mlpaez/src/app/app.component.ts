import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-porfolio-mlpaez';
  submit(form: NgForm) {
    console.log(form.value);   
}
}
