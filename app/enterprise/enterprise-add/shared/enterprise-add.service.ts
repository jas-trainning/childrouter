import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EnterpriseAdd } from './enterprise-add.model';

@Injectable()
export class EnterpriseAddService {

	constructor(private http: Http) { }

	getList(): Observable<EnterpriseAdd[]> {
		return this.http.get('/api/list').map(res => res.json() as EnterpriseAdd[]);
	}
}