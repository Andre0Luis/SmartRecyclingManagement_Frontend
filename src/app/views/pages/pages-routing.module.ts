import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
