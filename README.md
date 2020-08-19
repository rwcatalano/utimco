# Utimco

Hi there! 

Thanks for the opportunity to apply for this role. I was torn between writing this in C# with linq or nodejs using map and reduce. 
I opted for nodejs due to the speed in which I was able to get map reduce working... at the cost of having to learn a new testing framework (mocha).


## Directory Structure
===
<pre>
|__ data              contains the menu.json source file
|__ services	        business logic in utimco.js
|__ test				      contains test script and sample file
| app.js				      main entry for app
| app_monolith.js		  proof of concept
| app2_startsplit.js	second pass - planning out separation of concerns
</pre>

I began with jamming out a quick monolithic program to understand problem and provide proof of a solution. This code is in the app_monolith.js file.
More information on map reduce is available here:
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

I then broke up the monolith into smaller testable functions. This required me to move the code to an external library called utimco.js to get it off the main thread for testing.
You can see the logical separation taking shape in app2_startsplit.js and the final version in utimco.js

Once I had the code off the main thread I was able to add the tests using mocha and chai
This is a great resource for learning that framework:
https://medium.com/serverlessguru/how-to-unit-test-with-nodejs-76967019ba56

To run the app from the command line you will need to have node installed you can get a quick tutorial on that here:
https://www.guru99.com/download-install-node-js.html

Next, navigate to the root of this directory via your favorite cli and run the node command below to execute and print results to screen
Note: full path to file can also be a relative path ".\data\menu.json"


## Run the App
===
> node app.js "C:\FULL\PATH\TO\FILE.json"


What is happening ...
1. Read the file async
2. Convert contents to json
3. Map & Reduce the nested item ids
4. Print the result to the screen as an array



## Unit Tests
===
** You will need to install 2 node packages before you can run the tests **
> npm install mocha
> npm install chai

The unit tests were written in moca and chai and cover the following cases:
1. Can I open a file?
2. Does the function work to parse txt into json?
3. Can I calculate without nulls?
4. Can I calculate with nulls in strategic places?
5. Can I calculate with negative numbers?
6. Can I calculate with negative numbers and floats?


## Run the unit tests
===
> npm run test

You should see 6 passing tests

Again, thanks for your time and I look forward to meeting you all.

Cheers!
Rob
