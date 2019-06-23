import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent  {

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    const _radarChartData: Array<any> = new Array(this.radarChartData.length);
    for (let i = 0; i < this.radarChartData.length; i++) {
      _radarChartData[i] = {data: new Array(this.radarChartData[i].data.length), label: this.radarChartData[i].label};
      for (let j = 0; j < this.radarChartData[i].data.length; j++) {
        _radarChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.radarChartData = _radarChartData;
  }

}
