import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
names:string[]
constructor(){
  this.names = ['Felipe','Robert','Langdon','Dan']
}
}
