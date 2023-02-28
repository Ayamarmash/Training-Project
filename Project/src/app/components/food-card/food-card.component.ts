import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() FoodName : string = "Food"
  @Input() Description : string = ""
  @Input() FoodPrice : string = "0"
  @Input() FoodImg : string = "../../../assets/images/chicken.svg"
  @Input() left : boolean = false
}
