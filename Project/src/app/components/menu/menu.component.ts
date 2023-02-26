import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() choices =[{choice:"home", href: "home"},
    {choice:"about us", href: "about_us"},
    {choice:"service", href: "service"},
    {choice:"pricing", href: "pricing"},
    {choice:"blog", href: "blog"},
    {choice:"contact", href: "contact"}]
}
