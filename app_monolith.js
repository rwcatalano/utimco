'use strict';

const fs = require('fs');

var args = process.argv.slice(2);
if (!args[0]) {
    console.log('app1 You must specify a filepath to your json data file when running this command')
    console.log('Usage: node app.js C:\\PATH\\TO\\FILE.json');
    return;
}

var file = args[0]

//var file = 'C:\\Users\\rcatalano.GPLRINC\\Source\\Repos\\Utimco\\menu.json'

/*
 * Author: Robert W. Catalano (Rob)
 * Created: 2020-08-18
 * This script reads json from a file and sums up item ids from a nested list of menus where a label exists.
 * Note: json format should be headless and contain an immediate array of objects
 * I am using map and reduce - a good explanation of that can be found here: 
 * https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
*/


//read the file asnc
fs.readFile(file, (err, data) => {
    if (err) throw err;

    //parse the data otherwise you get byte array
    let body = JSON.parse(data);

    //declare an array to hold the final values
    var results = Array();

    //use the map function to mount the headless json
    var x = body.map(function (menus) {
        //navigate into the items and run the reduce function to start your tallies
        var total = menus.menu.items.reduce(function (a, item) {
            var addId = 0
            //if the item and label are not null we will add the id to the running total for this menu
            if (item && item.label) 
                addId = item.id

            //return the interim result for the reduce function
            return a + addId
        }, 0) //start the count from 0 to avoid nan issues if the first element is null

        //add the total for each menu to the results stack
        results.push(total);
    })

    //print out the results
    console.log(results)
});  