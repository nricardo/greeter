'use strict';

// import libs stuff
import {Component} from '@angular/core';

// import needed modules
import {Person} from 'models/Person';

// import stylesheet
import './main.scss';

// module's component
@Component({  
  selector: 'main',  
  template: require('./main.html')
})
export class Main {
  private people:Array<Person>;

  constructor () {
    this.people = [
      {name: 'Nelson Ricardo', email: 'nricardo@github.com'},
      {name: 'Luisa Ricardo', email: 'lricardo@github.com'}
    ];
  }
}
