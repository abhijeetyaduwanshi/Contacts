import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { OnInit } from '@angular/core';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    public header = 'This is the contacts app';
    public users: User[];
    public selectedUser = {};

    constructor(private _userService: UserService) { }

    onSelect(user) {
        this.selectedUser = user;
    }

    getUsers() {
        this._userService.getUsers().then((users: User[]) => this.users = users);
    }

    ngOnInit(): any {
        this.getUsers();
    }

}