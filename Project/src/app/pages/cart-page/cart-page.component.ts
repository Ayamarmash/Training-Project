import {Component, OnInit} from '@angular/core';
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";
import {Food} from "../../../assets/data/food-interface";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent  implements OnInit{
  constructor(private addToCartService : AddToCartFavService) {}

  ngOnInit(){
    this.itemsInCart = this.addToCartService.getItemsInCart()
  }
  itemsInCart : Food[] = []
}
