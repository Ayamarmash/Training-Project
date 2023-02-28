import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {OrderPageComponent} from "./pages/order-page/order-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";
import {FavoritePageComponent} from "./pages/favorite-page/favorite-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
