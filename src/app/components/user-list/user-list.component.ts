import { Component } from '@angular/core';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    public header = 'This is the contacts app';
    public users = [{ firstName: 'Abhijeet', lastName: 'Yaduwanshi', phone: '1236547890', email: 'abhijeetyaduwanshi@gmail.com' },
    { firstName: 'Abhi', lastName: 'Yadu', phone: '0987654321', email: 'abhiyadu@gmail.com' },
    { firstName: 'Jeet', lastName: 'Wanshi', phone: '0192837465', email: 'jeetwanshi@gmail.com' },
    { firstName: 'Piyush', lastName: 'Yadav', phone: '5647382910', email: 'piyushyadav@gmail.com' },];

    public selectedUser = {};
    onSelect(user) {
        this.selectedUser = user;
    }

}