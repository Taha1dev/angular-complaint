import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private dialog: MatDialogModule) { }
  @ViewChild('dialogTemplate')
  dialogTemplate!: TemplateRef<any>;
  selected: string = 'option1';
  appendForm() {
    console.log('hello');
  }
}
