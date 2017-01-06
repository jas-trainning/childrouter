import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      }, {
        path: 'add',
        component: UserAddComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(routes)
  ],
  declarations: [UserComponent, UserListComponent, UserAddComponent],
  bootstrap: [UserComponent]
})
export class UserModule { }
