/**
 * Created by maximus on 18.12.16.
 */
import { Injectable } from '@angular/core';
import {City} from "./classes/City";

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

@Injectable()
export class Service {
    getCity(): Promise<City[]> {
        return new Promise(resolve => setTimeout(()=>{resolve(weatherItems)},1500));
    }

    addCity(city: City): void {
        weatherItems.push(city);
    }

    deleteCity(city: City): void {
        let index = weatherItems.indexOf(city);
        if (index > -1) {
            weatherItems.splice(index,1);
        }
    }
}