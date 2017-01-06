import { Component, OnInit } from '@angular/core';

import { EnterpriseAdd } from './shared/enterprise-add.model';
import { EnterpriseAddService } from './shared/enterprise-add.service';

@Component({
	moduleId: module.id,
	selector: 'enterprise-add',
	styleUrls: ['./enterprise-add.component.css'],
	templateUrl: 'enterprise-add.component.html',
	providers: [EnterpriseAddService]
})

export class EnterpriseAddComponent implements OnInit {
	enterpriseAdd: EnterpriseAdd[] = [];

	constructor() { }

	ngOnInit() {

	}
}