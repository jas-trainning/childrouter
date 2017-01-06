import { NgModule } from '@angular/core';
import { EnterpriseAddComponent } from './enterprise-add/enterprise-add.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { EnterPriseComponent } from './enterprise.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: EnterPriseComponent,
        children: [{
            path: 'list',
            component: EnterpriseListComponent,

        },
        {
            path: 'add',
            component: EnterpriseAddComponent,
        }]
    }

];

@NgModule({
    imports: [RouterModule, RouterModule.forChild(routes)],
    declarations: [EnterPriseComponent, EnterpriseListComponent, EnterpriseAddComponent],
    bootstrap: [EnterPriseComponent]
})
export class EnterpriseModule {

}


