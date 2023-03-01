import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactEmail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.minLength(10)]),
    message: new FormControl('', [Validators.required, Validators.minLength(50)]),
  });

  onSubmit() {
    if(this.contactEmail.invalid) alert("Check inputs")
    else {
      console.log(this.contactEmail.value)
      this.contactEmail.reset()
    }
  }
}
