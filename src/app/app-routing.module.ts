import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [

    {
        // map '/persons' to the people list component
        path : 'persons',
        component: PeopleListComponent,
    },
    {
        path: 'persons/:id',
        component: PersonDetailsComponent
    },
    {
        path : '',
        redirectTo: '/persons',
        pathMatch: 'full'
    }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}