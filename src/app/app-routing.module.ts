
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ModalComponent } from './modal/modal.component';
import { UserComplaintComponent } from './user-complaint/user-complaint.component';

const routes: Routes = [
  { path: '', component: ComplaintComponent },
  { path: 'form', component: FormComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'user', component: UserComplaintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
