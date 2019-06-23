import {
  Directive,
  EventEmitter,
  ElementRef,
  Input,
  Output,
  HostListener
 } from '@angular/core';
import { FileItem } from '../models/file-items';
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];

  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  @HostListener('dragover' , ['$event'])
    public onDragEnter( event: any ) {
    this.mouseOver.emit(true);
    this._preventStop(event);
  }

  @HostListener('dragleave' , ['$event'])
  public onDragLeave( event: any ) {
    this.mouseOver.emit(false);
    this._preventStop(event);
  }

  @HostListener('drop' , ['$event'])
  public onDrop( event: any ) {
    const transfer = this._getTransfer( event );
    if ( !transfer )  {
      return;
    }

    this._extratFiles(transfer.files);
    this._preventStop(event);
    this.mouseOver.emit(false);
  }

  // tslint:disable-next-line:one-line
  private _getTransfer( event: any){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extratFiles ( filesList: FileList ) {

    // tslint:disable-next-line:forin
    for (const property in Object.getOwnPropertyNames(filesList)) {
      const fileTemp = filesList[property];
      if (this._fileIsLoaded(fileTemp)) {
          this.files.push( new FileItem (fileTemp));
          console.log(fileTemp);
      }
    }

    this._preventStop(event);
  }

  // validations
  private _preventStop( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileDropped( filename: string ): boolean {
    for (const file of this.files) {
      if ( file.name === filename ) {
        console.log( 'the file ' + filename + ' is added');
        return true;
      }
    }
    return false;
  }

  private isImage( filetype: string ): boolean {
    return (filetype === ''  || filetype === undefined ) ? false : filetype.startsWith('image');
  }

  private _fileIsLoaded( file: File ): boolean {
    if (!this._fileDropped( file.name ) && this.isImage(file.type) ) {
      return true;
    } else {
      return false;
    }
  }
}
