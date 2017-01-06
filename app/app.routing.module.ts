import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule',
    }, {
        path: 'enterprise',
        loadChildren: 'app/enterprise/enterprise.module#EnterpriseModule',
    }
];
