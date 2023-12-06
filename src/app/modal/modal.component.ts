import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComplaintComponent } from '../user-complaint/user-complaint.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    private _dialog: MatDialog,) { }
  handleModalClick() {
    this._dialog.open(UserComplaintComponent);

  }
}
