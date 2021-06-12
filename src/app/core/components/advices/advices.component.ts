import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent {
  @Input() inner_instruction: string = '';
  visible = false;
}
