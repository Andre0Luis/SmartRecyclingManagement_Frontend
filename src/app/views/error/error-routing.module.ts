import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorOneComponent } from './404/404-error.component';
import { ErrorTwoComponent } from './500/500-error.component';

const routes: Routes = [
    {
        path: '404',
        component: ErrorOneComponent
    },
    {
        path: '500',
        component: ErrorTwoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule { }
