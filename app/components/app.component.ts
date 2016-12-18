import { Component, OnInit } from '@angular/core';

import { City } from '../classes/City';
import {Service} from '../Service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [Service]
})
export class AppComponent implements OnInit{
    title: string = 'Погода в вашем городе';
    cityWeather: City[];

    constructor(private service: Service) {
        this.cityWeather = [];
    }

    ngOnInit() {
        this.service.getCity().then(Weather=>this.cityWeather = Weather)
    }

    create(event: Event, input: HTMLInputElement){
        if (input.value) {
            event.preventDefault();
            let city: City = new City(input.value);
            this.service.addCity(city);
            input.value = '';
        }

    }

    onCityDelete(city: City){
        this.service.deleteCity(city);
    }
}