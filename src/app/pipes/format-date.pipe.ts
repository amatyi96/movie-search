import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name: 'formatDate',
    pure: false
})
export class FormatDatePipe implements PipeTransform {

    constructor() {}

    transform(value: string, format: string = 'll'): string {
        return moment(value).format(format);
    }
}
