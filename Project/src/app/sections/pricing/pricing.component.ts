import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  @Input() plans = [
    {
      plan: "Basic",
      price: "35",
      features : ["6 Pis Chicken", "3 Pis Beef Chicken", "2 Pis Burger"],
      isHot: false
    },
    {
      plan: "Standard",
      price: "50",
      features : ["6 Pis Chicken", "3 Pis Beef Chicken", "2 Pis Burger"],
      isHot: true
    },
    {
      plan: "Premium",
      price: "45",
      features : ["6 Pis Chicken", "3 Pis Beef Chicken", "2 Pis Burger"],
      isHot: false
    }
  ]
}
