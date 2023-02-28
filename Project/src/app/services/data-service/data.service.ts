import { Injectable } from '@angular/core';
import { FoodData } from '../../../assets/data/food-data';
import {Food} from "../../../assets/data/food-interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  getFoodData() : Food[]{
    return FoodData;
  }
}
