import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // Remove the duplicate elements
    const uniqueArray = value.filter(function (el, index, array) {
      return array.indexOf(el) === index;
    });
    return uniqueArray;
  }

}
