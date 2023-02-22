import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class uppercase implements PipeTransform {
  transform(str: string): string {
    return str.toUpperCase();
  }
}
