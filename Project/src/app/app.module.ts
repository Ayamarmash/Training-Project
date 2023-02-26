import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    FoodCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
