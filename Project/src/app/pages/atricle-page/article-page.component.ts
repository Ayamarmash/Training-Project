import { Component } from '@angular/core';
import {DataService} from "../../services/data-service/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent {
  article : any
  constructor(private getDataService : DataService , private route: ActivatedRoute) {
    const id =  this.route.snapshot.paramMap.get('id')
    // @ts-ignore
    this.article = getDataService.getBlogData(id)
  }
}
