import {Component, OnInit} from '@angular/core';
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";
import {Food} from "../../../assets/data/food-interface";

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit{
  itemsInFav : Food[] = []

  constructor(private addToCartFavService : AddToCartFavService) {}
  ngOnInit(){
    this.itemsInFav = this.addToCartFavService.getItemsInFav()
  }
}
