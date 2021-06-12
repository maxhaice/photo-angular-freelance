import { Component } from '@angular/core';

@Component({
  selector: 'room-app',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  inner_instruction =
    '  1. Try to catch as much space, as it possible\n' +
    '  2. Try to catch the place, where new element\n' +
    '     will be placed.\n' +
    '  3. Remove all clothes, bags and other things,\n' +
    '     that are not part of interior.';
}
