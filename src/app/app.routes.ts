import { Routes } from '@angular/router';
import { CreateruleComponent } from './components/createrule/createrule.component';
import { ModifyRuleComponent } from './components/modifyrule/modifyrule.component';

import { EvaluateruleComponent } from './components/evaluaterule/evaluaterule.component';

export const routes: Routes = [
    {path:'evaluaterule',component:EvaluateruleComponent},
    {path:'modifyrule',component:ModifyRuleComponent},
    {path:'createrule',component:CreateruleComponent},
    { path:'', redirectTo: '/createrule', pathMatch: 'full'}
];
