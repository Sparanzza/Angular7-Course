import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { EditMapComponent } from './components/map/edit-map.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  entryComponents: [
    EditMapComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    EditMapComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
