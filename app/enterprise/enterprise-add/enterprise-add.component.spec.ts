import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { EnterpriseAddComponent } from './enterprise-add.component';
import { EnterpriseAddService } from './shared/enterprise-add.service';
import { EnterpriseAdd } from './shared/enterprise-add.model';

describe('a enterprise-add component', () => {
	let component: EnterpriseAddComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: EnterpriseAddService, useClass: MockEnterpriseAddService },
				EnterpriseAddComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EnterpriseAddComponent], (EnterpriseAddComponent) => {
		component = EnterpriseAddComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original enterprise-add service
class MockEnterpriseAddService extends EnterpriseAddService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
