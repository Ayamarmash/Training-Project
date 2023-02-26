import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  Description = "Lorem Ipsum available, but the majority have suffered alteration in some form,Lorem Ipsum available,  by injected humour, or randomised wordsbut the majority have suffered alteration in some form,Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"

  @Input() foodList = [{
    FoodName: "Peanut Butter",
    Description: this.Description,
    FoodPrice: "45",
    FoodImg :"../../../assets/images/chicken.svg"
  },
    {
      FoodName: "Pumpkin Pie",
      Description: this.Description,
      FoodPrice: "35",
      FoodImg :"../../../assets/images/chicken2.svg"
    },
    {
      FoodName: "Jambalaya",
      Description: this.Description,
      FoodPrice: "50",
      FoodImg :"../../../assets/images/burger.svg"
    }
  ]
}
