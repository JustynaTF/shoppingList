import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase',
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string | undefined): any {
    if (!value) {
      return null;
    }
    return value.toUpperCase();
  }
}
