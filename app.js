'use strict';


/*
 * Author: Robert W. Catalano (Rob)
 * Created: 2020-08-18
 * This script reads json from a file and sums up item ids from a nested list of menus where a label exists.
 * Note: json format should be headless and contain an immediate array of objects
 * I am using map and reduce - a good explanation of that can be found here: 
 * https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
 * ReadFile method is async
*/

//use the node file service library
const utimco = require('./services/utimco');

//get the file path from command line as a string
var args = process.argv.slice(2);
if (!args[0]) {
    console.log('app3 You must specify a filepath to your json data file when running this command');
    console.log('Usage: node app.js C:\\PATH\\TO\\FILE.json');
    return;
}

var filepath = args[0];

//because open file is async we pass in a closure to run after the file had been read
//this closure has the rest of the logic for this microservice
var closure = function main(json) {
    var body = utimco.parseJson(json);
    var results = utimco.calculate(body);
    console.log(results);
}

//run
utimco.openFile(filepath, closure);