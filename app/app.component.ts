import { Component } from '@angular/core';

class City {
    constructor(
        public title: string,
        public temperature: number = -10) {}
}

const weatherItems: City[] = [
    {
        title: 'Барнаул',
        temperature: -20
    },
    {
        title: 'Новосибирск',
        temperature: -15
    },
    {
        title: 'Бийск',
        temperature: -25
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Погода в вашем городе';
    cityWeather: City[] = weatherItems;

    create(event: Event, input: HTMLInputElement){
        event.preventDefault();
        let city: City = new City(input.value);
        this.cityWeather.push(city);
        input.value = '';
    }

    delete(item: City){
        let index = this.cityWeather.indexOf(item);
        if (index > -1) {
            this.cityWeather.splice(index,1);
        }

    }
}