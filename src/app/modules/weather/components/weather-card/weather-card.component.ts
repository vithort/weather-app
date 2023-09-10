import { Component, Input } from '@angular/core';

import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

import { WeatherData } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  // dados da previsão do tempo recebidos do componente pai
  @Input() weatherDataInput!: WeatherData;

  humidityIcon = faDroplet;
  maxTemperatureIcon = faTemperatureHigh;
  minTemperatureIcon = faTemperatureLow;
  windIcon = faWind;
}
