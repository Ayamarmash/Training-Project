import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { LandscapeComponent } from './components/landscape/landscape.component';
import {AboutComponent} from "./sections/about/about.component";
import {uppercase} from "./pips/uppercase-pipe";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { MenuComponent } from './components/menu/menu.component';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {MatBadgeModule} from "@angular/material/badge";
import {GeneralSectionComponent} from "./sections/general-section/general-section.component";
import { ServiceComponent } from './sections/service/service.component';
import {price} from "./pips/price-pipe";
import { PricingComponent } from './sections/pricing/pricing.component';
import {FoodCardComponent} from "./components/food-card/food-card.component";
import { DiscountCardComponent } from './components/discount-card/discount-card.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import { BlogsComponent } from './sections/blogs/blogs.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { FoodOrderCardComponent } from './components/food-order-card/food-order-card.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticleCardComponent,
    LandscapeComponent,
    AboutComponent,
    uppercase,
    ToolbarComponent,
    MenuComponent,
    GeneralSectionComponent,
    ServiceComponent,
    price,
    PricingComponent,
    FoodCardComponent,
    DiscountCardComponent,
    PricingCardComponent,
    BlogsComponent,
    FooterComponent,
    BlogCardComponent,
    OrderPageComponent,
    FoodOrderCardComponent,
    CartPageComponent,
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatBadgeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
