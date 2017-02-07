'use strict';

// import libs stuff
import {bootstrap, options} from 'angular2-now';

// setup overhall options
options({controllerAs: 'vm'});

// import our "main" module
import {Main} from 'main';

// start things up!
bootstrap(Main);