import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent form submission refresh

    console.log("Full Name:", this.fullName);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Subject:", this.subject);
    console.log("Message:", this.message);

    if (!this.fullName || !this.email || !this.subject || !this.message) {
      alert("All fields except phone are required!");
      return;
    }

    const templateParams = {
      from_name: this.fullName,
      from_email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message
    };

    emailjs.send("service_e57p7tn", "template_dq8omhl", templateParams, "wf-81dKnDYi5iV0oy")
      .then(response => {
        console.log("Email Sent Successfully!", response.status, response.text);
        alert("Your message has been sent!");

        // Clear the form fields after submission
        this.fullName = '';
        this.email = '';
        this.phone = '';
        this.subject = '';
        this.message = '';
      })
      .catch(error => {
        console.error("Error Sending Email:", error);
        alert("Failed to send email. Please try again later.");
      });
  }
}
