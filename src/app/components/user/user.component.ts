import { Component } from '@angular/core';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    inputs: ['user']
})
export class UserComponent {
    public user = {};
}