import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
@Input() name : string;
constructor(){

}
}
