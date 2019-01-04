import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    transform(value: any, propName: string): any {
        propName = propName || 'name';
        return value.sort(function (a, b) {
            let x = a[propName].toLowerCase();
            let y = b[propName].toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    }

}
