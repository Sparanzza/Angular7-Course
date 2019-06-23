import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;
  persons = Array(500).fill(0);
  constructor() { }

  ngOnInit() {
    console.log(this.persons);
  }

  goToEnd() {
    this.viewport.scrollToIndex( this.persons.length);
  }

  goToStart() {
    this.viewport.scrollToIndex(this.persons[0]);
  }
}
