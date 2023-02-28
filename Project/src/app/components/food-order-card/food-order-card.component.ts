import {Component, Input} from '@angular/core';
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";

@Component({
  selector: 'app-food-order-card',
  templateUrl: './food-order-card.component.html',
  styleUrls: ['./food-order-card.component.scss']
})
export class FoodOrderCardComponent {
  constructor(private addToCartService : AddToCartFavService) {}

  @Input() FoodImg: string = "";
  @Input() FoodName : string = ""
  @Input() FoodPrice : string = ""
  @Input() Type : string = ""
  addToCartBtn(){
    this.addToCartService.addToCart({
      FoodName: this.FoodName,
      FoodImg: this.FoodImg,
      FoodPrice: this.FoodPrice
    })
  }
  addToFavBtn(){
    this.addToCartService.addToFav({
      FoodName: this.FoodName,
      FoodImg: this.FoodImg,
      FoodPrice: this.FoodPrice
    })
  }
}
