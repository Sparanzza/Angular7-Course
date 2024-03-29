import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { GraphLinesComponent } from './components/graph-lines/graph-lines.component';
import { GraphBarsComponent } from './components/graph-bars/graph-bars.component';
import { GraphDoughnutsComponent } from './components/graph-doughnuts/graph-doughnuts.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphLinesComponent,
    GraphBarsComponent,
    GraphDoughnutsComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
