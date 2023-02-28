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
  @Input() SocialMediaLinks = [
    {
      name: "instagram",
      link: ""
    },
    {
      name: "facebook",
      link: ""
    },
    {
      name: "twitter",
      link: ""
    },
    {
      name: "whatsapp",
      link: ""
    }
  ]
  @Input() Website : string = "yourwebsite.com"
}
