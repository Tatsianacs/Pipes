import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    'name': 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(initialStr: string) {
        return initialStr.split('').reverse().join('');
    }
}
