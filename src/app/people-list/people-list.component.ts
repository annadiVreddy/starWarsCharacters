import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  template: `<h2>Starwars characters</h2>
  <ul>
  <li *ngFor="let person of people">
    <a [routerLink]="['/persons',person.id]">{{person.name}}</a>
  </li>
</ul>

<!-- HERE: we add the template for the person details -->
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {


  people: Person[];

  constructor(private peopleService: PeopleService) {
   
   }

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }

 

}
