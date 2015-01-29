# Ardusat Data Platform

This is a simple skeleton app to demonstrate a data dashboard.

## Configuration

This app has a bare-bones Angular.js installation contained in `./app`, and a Node.js webserver to
server up files. Dependencies are managed by `npm` and `bower`. You can install all dpendencies for
both by running `npm install`. Once everything has installed, start the web server with `npm start`.

## CSS

A simple SASS pipeline has been set up to manage CSS dependencies with the Ardusat theme/skin. This
is managed by `grunt` in the provided `Gruntfile.js`. Sass files are located in `app/sass` and
`app/sensor-data/sensor-data.scss`, but have very little styling besides pulling in Bootstrap 3 and
skinning it with Ardusat colors & fonts. This should be a good starting point.

## D3.js

D3 (http://d3js.org/) can optionally be used as an SVG graphics framework. It is loaded
asynchronously with a promise provided by the `d3Service`. For a usage example, see the
`SensorDataCtrl`.

## Data

Static data is provided from the webserver at `/data.json`. You can download this file directly to
see what the JSON data looks like. The provided `SensorDataCtrl` has an example of using the `$http`
service to load the data into Angular.
