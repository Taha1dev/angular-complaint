import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-complaint',
  templateUrl: './user-complaint.component.html',
  styleUrls: ['./user-complaint.component.css']
})
export class UserComplaintComponent {
  complaintForm: FormGroup<any>;
  constructor(private fb: FormBuilder) {
    this.complaintForm = this.fb.group({
      complaintType: ['', Validators.required],
      complaintMessage: ['', Validators.required],
    });
  }
}
