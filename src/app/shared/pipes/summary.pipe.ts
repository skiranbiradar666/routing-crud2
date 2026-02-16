import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

   transform(value: string, limit : number = 60){
   
    if(value.length === 0){
      return ''
    }

    return value.substring(0, limit) + '...'
  }

}
