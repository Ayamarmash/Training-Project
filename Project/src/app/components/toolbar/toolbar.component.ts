import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() logoSrc : string = "../../../assets/images/logo.svg"
  search: any;
  favorite: number = 1;
  cart: number = 0;

}
