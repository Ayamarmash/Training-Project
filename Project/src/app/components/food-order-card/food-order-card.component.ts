import {Component, Input} from '@angular/core';
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";

@Component({
  selector: 'app-food-order-card',
  templateUrl: './food-order-card.component.html',
  styleUrls: ['./food-order-card.component.scss']
})
export class FoodOrderCardComponent {
  constructor(private addToCartService : AddToCartFavService) {}

  @Input() foodImg: string = "";
  @Input() foodName : string = ""
  @Input() foodPrice : string = ""
  @Input() type : string = ""

  @Input() favPage : boolean = false

  addToCartBtn(){
    this.addToCartService.addToCart({
      foodName: this.foodName,
      foodImg: this.foodImg,
      foodPrice: this.foodPrice,
      type: this.type
    })
  }
  addToFavBtn(){
    this.addToCartService.addToFav({
      foodName: this.foodName,
      foodImg: this.foodImg,
      foodPrice: this.foodPrice,
      type: this.type
    })
  }
  removeFromFavBtn() {
    this.addToCartService.removeFromFav(this.foodName)
  }
}
