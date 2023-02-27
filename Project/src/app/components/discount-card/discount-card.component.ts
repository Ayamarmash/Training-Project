import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-discount-card',
  templateUrl: './discount-card.component.html',
  styleUrls: ['./discount-card.component.scss']
})
export class DiscountCardComponent {
  @Input() backgroundPath : string =  "../../../assets/images/discount1.svg"
  @Input() mainTitle : string =  "sale 50% discount"
  @Input() subTitle : string =  "all food products"
  @Input() intro : string = "Lorem Ipsum available, but the majority have suffered  but the majority Lorem Ipsum available, have suffered alteration in some form, by injected humour, or randomised words"
  @Input() left: boolean = true
}
