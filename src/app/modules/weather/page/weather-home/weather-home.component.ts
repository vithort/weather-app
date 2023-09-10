import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { WeatherData } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  initialCityName = 'São Paulo';
  searchIcon = faMagnifyingGlass;
  weatherData!: WeatherData;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCityName);
    this.initialCityName = '';
  }

  private getWeatherData(cityName: string): void {
    this.weatherService
      .getWeatherData(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: WeatherData) => {
          response && (this.weatherData = response);
          console.log(this.weatherData);
        },
        error: (error) => console.log(error),
      });
  }
}
