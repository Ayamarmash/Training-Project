import {Component, Input} from '@angular/core';
import {AddToCartFavService} from "../../services/add-to-cart-favorite-service/add-to-cart-favorite.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private addToCartFavService : AddToCartFavService) {}
  @Input() logoSrc : string = "../../../assets/images/logo.svg"
  search: any;
  favorite: number = this.addToCartFavService.getItemsInFav().length;
  cart: number = this.addToCartFavService.getItemsInCart().length;
}
