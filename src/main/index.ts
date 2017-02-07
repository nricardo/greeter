'use strict';

// import libs stuff
import {Component, SetModule} from 'angular2-now';

// import needed modules
import greeter from 'greeter';
import {Person} from 'models/Person';

// import stylesheet
import './main.scss';

// define module
export default SetModule('main', [greeter]).name;

@Component({  
  selector: 'main',
  template: require('./main.html')
})
export class Main {
  private people:Array<Person>;

  constructor () {
    this.people = [];
    for (let i=0; i != 100; ++i) {
      let person:Person = {name: 'Nelson Ricardo', email: 'nricardo@github.com'};
      this.people.push(person);
    }
  }
}
