import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EnterpriseList } from './enterprise-list.model';

@Injectable()
export class EnterpriseListService {

	constructor(private http: Http) { }

	getList(): Observable<EnterpriseList[]> {
		return this.http.get('/api/list').map(res => res.json() as EnterpriseList[]);
	}
}