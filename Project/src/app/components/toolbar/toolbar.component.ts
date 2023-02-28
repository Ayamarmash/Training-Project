import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  constructor(private addToCartFavService : AddToCartFavService) {}
  @Input() logoSrc : string = "../../../assets/images/logo.svg"
  favorite: number = 0;
  cart: number = 0;
  search: any;

  ngOnInit(): void {
    // subscribe to changes that happens to subscribeItemsInCart subject
    // whenever thers is a change on it, it will emit (or send) what i want
    // which is in this case --> itemsInCart (check the add-to-cart-favouite.service.ts Line 18)
    this.addToCartFavService.subscribeItemsInCart.subscribe((items) => {
      this.cart = items.length
    });

    this.addToCartFavService.subscribeItemsInFav.subscribe((items) => {
      this.favorite = items.length
    });
  }
}
