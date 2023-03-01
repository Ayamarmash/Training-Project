import { Injectable } from '@angular/core';
import { FoodData } from '../../../assets/data/food-data';
import {Food} from "../../../assets/data/food-interface";
import {ArticlessData} from "../../../assets/data/articless-data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  getFoodData() : Food[]{
    return FoodData;
  }

  getBlogsData(){
    return ArticlessData
  }

  getBlogData(id: string | null){
    let blog = ArticlessData.find(blog => blog.articleId === id)
    return blog
  }
}
