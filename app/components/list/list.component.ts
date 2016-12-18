import { Component, EventEmitter, Input, Output } from '@angular/core';
import {City} from "../../classes/City";

@Component({
    moduleId: module.id,
    selector: 'List',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
})
export class ListComponent {
    @Input()  item: City;
    @Output() deleted = new EventEmitter();

    delete() {
        console.log('deleting', this.item);
        this.deleted.emit(this.item);
    }
}
