'use strict';

//use the node file service library
const fs = require('fs');

var args = process.argv.slice(2);
if (!args[0]) {
    console.log('app2 You must specify a filepath to your json data file when running this command');
    console.log('Usage: node app.js C:\\PATH\\TO\\FILE.json');
    return;
}

//get the file path from command line as a string
var file = args[0];

//var file = 'C:\\Users\\rcatalano.GPLRINC\\Source\\Repos\\Utimco\\menu.json'

/*
 * Author: Robert W. Catalano (Rob)
 * Created: 2020-08-18
 * This script reads json from a file and sums up item ids from a nested list of menus where a label exists.
 * Note: json format should be headless and contain an immediate array of objects
 * I am using map and reduce - a good explanation of that can be found here: 
 * https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
 * ReadFile method is async
*/


//to be testable we have to break the function up into a bunch of smaller functions
//because the readfile method is async I will pass in a function that will run the rest of the little programs
//params:
//json - the raw string data returned from the file
var closure = function main(json) {
    var body = ParseJson(json);
    var results = Calculate(body);

    console.log(results);

    module.exports = results;
}

//start the program by running the async openfile method to get the json data. Passin
//params: 
//file - string path to your json file
//closure - the function to run once the async operation has finished
OpenFile(file, closure);


//open the file async, execute callback after file has been read async
function OpenFile(path, callback) {
    //read the file asnc
    fs.readFile(file, (err, json) => {
        if (err) throw err;
        callback(json);
    });  
}

//parse the json
function ParseJson(json) {
    //parse the data otherwise you get byte array
    let body = JSON.parse(json);
    return body;
}

//run the map reduce
function Calculate(body) {
    //declare an array to hold the final values
    var results = Array();

    //use the map function to mount the headless json
    var x = body.map(function (menus) {
            //navigate into the items and run the reduce function to start your tallies
            var total = menus.menu.items.reduce(function (a, item) {
            var addId = 0;

            //if the item and label are not null we will add the id to the running total for this menu
            if (item && item.label)
                addId = item.id;

            //return the interim result for the reduce function
            return a + addId
        }, 0) //start the count from 0 to avoid nan issues if the first element is null

        //add the total for each menu to the results stack
        results.push(total);
    })

    return results;
}