import { Component } from '@angular/core';

@Component({
  selector: 'rooms-app',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomsComponent {
  inner_instruction: string =
      '1. Check if all elements are detected correctly\n' +
      '2. Delete objects, that should not be counted in selection process.\n' +
      '3. Take more photos if it needed.';
}
