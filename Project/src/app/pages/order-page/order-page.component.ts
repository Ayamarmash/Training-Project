import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service/data.service'
import {Food} from "../../../assets/data/food-interface";
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit{

  constructor(private dataService : DataService) {}
  ngOnInit(){
    this.getFoodData()
  }
  getFoodData() {
    this.menuItems = this.dataService.getFoodData()
  }
  menuItems : Food[] | undefined
}
