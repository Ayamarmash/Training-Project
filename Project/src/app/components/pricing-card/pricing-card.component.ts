import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent {
  @Input() plan : string = "Basic"
  @Input() price : string = "35"
  @Input() features : string[] = ["6 Pis Chicken", "3 Pis Beef Chicken", "2 Pis Burger"]
  @Input() isHot : boolean = false
}
