import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardPageComponent {
  form: FormGroup;
  chartData: { name: string; value: number }[] = [];
  activityData = [
    {name: 'Water', value: 120},
    {name: 'Oil', value: 300},
    {name: 'Waste', value: 90},
    {name: 'Electric', value: 250}
  ];
  view: [number, number] = [500, 300];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      valueA: [0],
      valueB: [0],
      valueC: [0]
    });
  }

  generateCharts(): void {
    const { valueA, valueB, valueC } = this.form.value;
    this.chartData = [
      { name: 'A', value: valueA },
      { name: 'B', value: valueB },
      { name: 'C', value: valueC }
    ];
  }
}
