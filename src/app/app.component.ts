import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fetchApi';
  users: User[] = [];
  user: User = new User();
  userForm = document.getElementById('userForm');
  constructor(private userData: UserDataService) {
    // userData.users().subscribe((data) => {
    //   this.users = data;
    // });
    this.getData();
  }

  getData() {
    this.userData.users().subscribe((data: any) => {
      this.users = data;
    });
  }

  // for Add new data
  getUserFormData(data: User) {
    // console.log(data);
    this.userData.saveUsers(data).subscribe((result) => {
      this.getData();
    });
  }
  // For Edit
  onEdit(selectedItem: User) {
    this.user = { ...selectedItem };
  }

  getUpdateFormData(data: User) {
    this.userData.editUser(data.id, data).subscribe((result) => {
      // console.log(result);
      this.getData();
    });
  }

  // for Delete
  deleteUser(id: number) {
    this.userData.deleteUser(id).subscribe((result) => {
      // console.log(result);
      this.getData();
    });
  }
}

export class User {
  public id: number = 0;
  public name: string = '';
  public email: string = '';
  public city: string = '';
  public phone: number = 0;
}
