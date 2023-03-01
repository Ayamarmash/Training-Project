import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() Img1 = "../../assets/images/blog2.svg"
  @Input() Img2 = "../../assets/images/blog1.svg"
  @Input() Title : string = "Eat food. Not too much mostly plants."
  @Input() intro: string = "Lorem Ipsum available, Ipsum available, the majority have suffered alteration in some form,Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"
}
