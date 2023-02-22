import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import {NavbarComponent} from "./Components/navbar/navbar.component";
import {FooterComponent} from "./Components/footer/footer.component";
import { AtricleCardComponent } from './components/atricle-card/atricle-card.component';
import { ArticlePageComponent } from './Pages/article-page/article-page.component';
import { LandscapeComponent } from './components/landscape/landscape.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import {AboutComponent} from "./Components/about/about.component";
import {uppercase} from "./pips/uppercase-pipe";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    AtricleCardComponent,
    ArticlePageComponent,
    LandscapeComponent,
    AboutComponent,
    FoodCardComponent,
    PricingCardComponent,
    uppercase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
