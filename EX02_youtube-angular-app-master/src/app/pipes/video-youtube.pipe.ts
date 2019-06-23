import { Pipe , PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

    constructor( private dom: DomSanitizer ) {}
    transform( value: any , args?: any ): any {
        const url = 'https://www.youtube.com/embed/';
        return this.dom.bypassSecurityTrustResourceUrl (url + value );

    }

}
