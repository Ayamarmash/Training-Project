import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() logoSrc : string = "../../../assets/images/logo.png"
  @Input() Title : string = "american food"
  @Input() subTitle : string = "The Best Taste Food"
  @Input() instagram : string | undefined
  @Input() facebook : string | undefined
  @Input() twitter : string | undefined
  @Input() whatsapp : string | undefined
}
