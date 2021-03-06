import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-display",
  templateUrl: "./weather-display.component.html",
  styleUrls: ["./weather-display.component.css"]
})
export class WeatherDisplayComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherObj;
  errorText: string = "";
  getWeather(city) {
    this.weatherService.getWeather(city).subscribe(
      data => {
        this.weatherObj = data;
        console.log(data);
      },
      error => {
        this.errorText = "Please enter a valid city name";
        setTimeout(() => {
          this.errorText = "";
        }, 1800);
        //console.log(error.error.message)}
      }
    );
  }

  capitalizeFirstLetter(str: string) {
    let firstLetter = str[0].toUpperCase();
    let remainingStr = str.slice(1, str.length + 1);
    return firstLetter.concat(remainingStr);
  }

  ngOnInit() {
    this.capitalizeFirstLetter("test");
  }
}
