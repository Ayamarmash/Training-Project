import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() foodName : string = "Food"
  @Input() Description : string = ""
  @Input() foodPrice : string = "0"
  @Input() foodImg : string = "../../../assets/images/chicken.svg"
  @Input() left : boolean = false
}
