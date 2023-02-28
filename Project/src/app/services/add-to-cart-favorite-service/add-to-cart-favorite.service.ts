import { Injectable } from '@angular/core';
import {Food} from "../../../assets/data/food-interface";

@Injectable({
  providedIn: 'root'
})
export class AddToCartFavService {

  constructor() { }
  itemsInCart : Food[] = []
  itemsInFav : Food[] = []

  addToCart(newItem: Food){
    this.itemsInCart.push(newItem)
  }
  getItemsInCart(){
    return this.itemsInCart
  }
  addToFav(newItem: Food){
    this.itemsInFav.push(newItem)
  }
  getItemsInFav(){
    return this.itemsInFav
  }
}
