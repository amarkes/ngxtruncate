import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ngXtruncate',
})
export class NgXtruncatePipe implements PipeTransform {
  transform(value: string, ...args) : string {

    let limit = args[0] ? parseInt(args[0]) : 10;
    let trail = args[1] ? args[1] : '...';
    const txt = document.createElement('textarea');
    txt.innerHTML = value;
    return txt.value.length > limit ? String(txt.value).replace(/<[^>]+>/gm, '').substring(0, limit) + trail : String(txt.value).replace(/<[^>]+>/gm, '');
  }
}
