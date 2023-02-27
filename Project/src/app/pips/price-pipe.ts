import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price'
})
export class price implements PipeTransform {
  transform(str: string): string {
    return "$" + str
  }
}
