import { Component, Input, OnInit } from '@angular/core';

import { WeatherData } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDataInput!: WeatherData;

  ngOnInit(): void {
    console.log('dados do Input:', this.weatherDataInput);
  }
}
