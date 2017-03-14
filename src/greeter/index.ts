'use strict';

// import libs stuff
import {Component} from '@angular/core';

// import needed modules
import {Person} from 'models/Person';

// import stylesheet
import './greeter.scss';

// module's component
@Component({
  selector: 'greeter',
  inputs: ['person'],
  template: require('./greeter.html'),
})
export class Greeter {
  private person:Person;

  greet():void {
    console.log(this.person);
  }
}
