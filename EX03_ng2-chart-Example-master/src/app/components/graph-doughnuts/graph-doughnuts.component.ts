import { Component } from '@angular/core';

@Component({
  selector: 'app-graph-doughnuts',
  templateUrl: './graph-doughnuts.component.html',
  styles: []
})
export class GraphDoughnutsComponent   {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomNumber() {
    console.log('random');
    this.doughnutChartData = [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ];
  }
}
