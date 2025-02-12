import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  demoMail: string = "tastytrail@gmail.com";
  testimonyForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.testimonyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitTestimony() {
    if (this.testimonyForm.valid) {
      const { name, email, message } = this.testimonyForm.value;
      this.api.saveTestimonialAPI({ name, email, message }).subscribe({
        next: (res: any) => {
          alert("Testimonial submitted successfully");
          this.testimonyForm.reset();
        },
        error: (err) => {
          alert("Failed to submit testimonial: " + err.message);
        },
      });
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
}


