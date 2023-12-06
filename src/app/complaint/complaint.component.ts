import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  constructor(
    private _dialog: MatDialog,) { }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(FormComponent);

  }
}
