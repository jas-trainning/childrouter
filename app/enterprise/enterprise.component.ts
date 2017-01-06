import { Component, OnInit } from '@angular/core';

import { EnterPrise } from './shared/EnterPrise.model';
@Component({
	moduleId: module.id,
	selector: 'EnterPrise',
	templateUrl: 'enterprise.component.html'
})
export class EnterPriseComponent implements OnInit {
	EnterPrise: EnterPrise[] = [];

	constructor() {

	}
	ngOnInit() {
	};
}
