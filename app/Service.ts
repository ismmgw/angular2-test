/**
 * Created by maximus on 18.12.16.
 */
import { Injectable } from '@angular/core';
import {City} from "./classes/City";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Service {
    cityArray: City[];

    constructor(private http: Http) {
        this.cityArray = JSON.parse(window.localStorage.getItem("storageCityArray")) || [];
    }

    getCity(): Promise<City[]> {
        return new Promise(resolve => setTimeout(()=>{resolve(this.cityArray)},1500));
    }

    addCityHttp(name: string) {
        //return new Promise(resolve => setTimeout(()=>{resolve(weatherItems)},1500));
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=3754becbcecd72b2aa8c6498c8b0c3a8`)
            .toPromise()
            .then(response => {
                let temp: number = parseInt(response.json().main.temp);
                temp = temp - 273;
                let city = new City(response.json().name, temp );
                this.cityArray.push(city);
                window.localStorage.setItem("storageCityArray", JSON.stringify(this.cityArray));
                //return city;
            })
            .catch(this.handleError);
    }

    addCity(city: City): void {
        this.cityArray.push(city);
    }

    deleteCity(city: City): void {
        let index = this.cityArray.indexOf(city);
        if (index > -1) {
            this.cityArray.splice(index,1);
        }
        window.localStorage.setItem("storageCityArray", JSON.stringify(this.cityArray));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
