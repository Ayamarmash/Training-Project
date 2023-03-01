import {Component, Input} from '@angular/core';
import {DataService} from "../../services/data-service/data.service";
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  constructor(private addToCartService : AddToCartFavService) {}
  @Input() foodName : string = "Food"
  @Input() Description : string = ""
  @Input() foodPrice : string = "0"
  @Input() foodImg : string = "../../../assets/images/chicken.svg"
  @Input() left : boolean = false

  addToCart(){
    this.addToCartService.addToCart({
      foodName: this.foodName,
      foodPrice: this.foodPrice,
      foodImg: this.foodImg
    })
  }
}
