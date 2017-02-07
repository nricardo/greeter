'use strict';

// import libs stuff
import {Component, SetModule} from 'angular2-now';

// import needed modules
import {Person} from 'models/Person';

// import stylesheet
import './greeter.scss';

// define module
export default SetModule('greeter', []).name;

@Component({
  selector: 'greeter',
  bind: { person: '<' },
  template: require('./greeter.html'),
})
export class Greeter {
  private person:Person;

  greet():void {
    console.log(this.person);
  }
}
