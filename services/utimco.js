/*
* Author: Robert W. Catalano (Rob)
* Created: 2020-08-18
* This lib reads json from a file and sums up item ids from a nested list of menus where a label exists.
* 
* to be testable we have to break the function up into a bunch of smaller functions
* because the readfile method is async I will pass in a function that will run the rest of the little programs
* 
* Note: json format should be headless and contain an immediate array of objects
* 
* I am using map and reduce - a good explanation of that can be found here: 
* https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
* ReadFile method is async
*/

'use strict'

//use the node file service library to read a utf8 file
const fs = require('fs');


//reads json data from the file
//params:
//path string : fully qualified path to file
//callback function that accepts the contents of the file
exports.openFile = (path, callback) => {
    fs.readFile(path, 'utf8', (err, json) => {
        if (err) throw err;
        callback(json);
    });
}

//parses string to json
exports.parseJson = (json) => JSON.parse(json)


//performs the calculation using map and reduce
//params
//body json object : representing your dataset
exports.calculate = (body) => {
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

        //add the total to stack
        results.push(total);
    })

    return results;
}