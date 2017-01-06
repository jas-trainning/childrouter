import { Component, OnInit } from '@angular/core';

import { EnterpriseList } from './shared/enterprise-list.model';


@Component({
	moduleId: module.id,
	selector: 'enterprise-list',
	templateUrl: 'enterprise-list.component.html',
	styleUrls: ['./enterprise-list.component.css']
]
})

export class EnterpriseListComponent implements OnInit {
	enterpriseList: EnterpriseList[] = [];

	constructor() { }

	ngOnInit() {

	}
}