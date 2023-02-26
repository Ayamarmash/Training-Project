import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() FoodName : string = "Food"
  @Input() Description : string = "Lorem Ipsum available, but the majority have suffered alteration in some form,Lorem Ipsum available,  by injected humour, or randomised wordsbut the majority have suffered alteration in some form,Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"
  @Input() FoodPrice : string = "0"
  @Input() FoodImg : string = "../../../assets/images/chicken.svg"
}
