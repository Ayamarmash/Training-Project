import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service/data.service";
import {Food} from "../../../assets/data/food-interface";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit{
  constructor(private dataService : DataService) {}
  ngOnInit(){
    this.getFoodData()
  }
  getFoodData() {
    this.foodList = this.dataService.getFoodData()
  }
  foodList : Food[] | undefined
}
