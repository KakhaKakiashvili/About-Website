import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  submitted = false

  contactForm = new FormGroup ({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required ),
    subject: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  })

  submitMessage() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
  
      alert('Please fill in all fields correctly');
    } else {
      alert('Message has been sent');
      this.contactForm.reset();
      this.submitted = false; // Reset submission flag
    }
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control?.invalid && (this.submitted || control.touched));
  }
}
