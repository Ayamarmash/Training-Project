import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-general-section',
  templateUrl: './general-section.component.html',
  styleUrls: ['./general-section.component.scss']
})
export class GeneralSectionComponent {
  @Input() title : string = "General"
  @Input() paragraph : string = "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"

}
