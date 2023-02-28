import { Injectable } from '@angular/core';
import {Food} from "../../../assets/data/food-interface";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddToCartFavService {

  constructor() { }
  itemsInCart : Food[] = []
  itemsInFav : Food[] = []
  subscribeItemsInCart: Subject<Food[]> = new Subject<Food[]>();
  subscribeItemsInFav: Subject<Food[]> = new Subject<Food[]>();

  addToCart(newItem: Food){
    this.itemsInCart.push(newItem)
    // this will emit the itemsInCart array whenever it gets changed
    // and wherever the subscribeItemsInCart is subscribed to, will get the new emitted value
    this.subscribeItemsInCart.next(this.itemsInCart)
  }

  addToFav(newItem: Food){
    this.itemsInFav.push(newItem)
    this.subscribeItemsInFav.next(this.itemsInFav)
  }

  getItemsInCart(){
    return this.itemsInCart
  }

  getItemsInFav(){
    return this.itemsInFav
  }

  removeFromFav(name: string){
    this.itemsInFav = this.itemsInFav.filter((item)=>{
      if(item.foodName === name) return false
      return true
    })
    this.subscribeItemsInFav.next(this.itemsInFav)
  }
}
