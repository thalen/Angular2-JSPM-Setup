# Angular2-JSPM-Setup
Requires nodejs installed.
Includes setup for Angular 2.0-beta and typescript and the heroes tutorial from angular.io.
This project has extended the tutorial with a rest service which is consumed using the http service and observables.
## How to start:
First start the backend service in a separate process:
<pre>
node api
</pre>
This will start a simple rest service running on port 80
<br><br>
Then run:
<pre>
npm install jspm -g
npm install
jspm install
npm start
</pre>
