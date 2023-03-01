import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() Title : string = "Let Food be thy medicine medicine be thy food."
  @Input() Intro : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor hendrerit mollis. Mauris purus felis, feugiat et felis at, semper sagittis ligula. Integer malesuada tortor ut mi pulvinar, in pulvinar eros rutrum. Donec feugiat justo vel imperdiet ultricies. Nullam non quam id justo interdum sollicitudin quis quis justo. "
  @Input() VideoSrc : string = "https://www.youtube.com/embed/7aLAeGPqHOY"

  @Input() left : boolean = false
  @Input() id : number = 0;
}
