# Angular2-JSPM-Setup
Requires nodejs installed.
Includes setup for Angular 2.0-beta and typescript and the heroes tutorial from angular.io.
This project has extended the tutorial with a rest service which is consumed using the http service and observables. <br>
Also included is some jasmine based unit tests, they are run through PhantomJS2.
## How to start:
First setup project:
<pre>
npm run setup
</pre>
Because of a dependency problem with angular2-beta and rxjs, you must manually remove some entries from config.js: <br><br>
<ol>
  <li>
    Open the file config.js in the root folder
  </li>
  <li>
    Under the map section, remove all entries of "rxjs"
  </li>
  <li>
    Save and close the file.
  </li>
</ol>

Now start the backend service in a separate process:
<pre>
npm run api
</pre>
This will start a simple rest service running on port 80 <br> <br>
Finally start up the application:
<pre>
npm start
</pre>

Running tests:
Run unit tests through phantomjs with the following command:
<pre>
npm run test
</pre>
