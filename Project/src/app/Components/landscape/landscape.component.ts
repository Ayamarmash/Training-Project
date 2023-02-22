import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.scss']
})
export class LandscapeComponent {
  @Input() buttonTitle : string = "Order Now"
  @Input() backgroundPath : string = "../../../assets/Images/landscape.svg"
  @Input() mainTitle : string = "American Food"
  @Input() subTitle : string = "The Best Taste Food"
  @Input() intro : string = "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"
}
