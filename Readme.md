Assignment 8 - Spring 2017

Section 2 due April 3.  Section 1 due April 5.

In this assignment, you will finish the CoffeeRun app, complete a Programming Challenge, and modify the app to work with a new back-end.

Complete the following:

Work through Chapter 13 to connect CoffeeRun to a back-end service.

Complete the SIlver Challenge: Validating Against the Remote Server.

Note: Steps (3) through (6) may be completed either before or after working through Chapter 14.

From the command line, install the json-server tool with
npm install -g json-server

then switch to your coffeerun/ directory.

Download db.json from GitHub.  Place it in your coffeerun/ directory, then start the server with

json-server --port=3002 --watch db.json

Modify SERVER_URL in scripts/main.js to use
http://localhost:3002/coffeeorders

Update scripts/remotedatastore.js as necessary to use the local json-server as CoffeeRun’s new back end.

Note that you will need to make changes to the way that orders are created.  These changes should not affect the rest of the code.

Hint: POST a new order and see how the newly-created order differs from the order currently stored in db.json.

Work through Chapter 14 to switch over to Promises and JQuery Deferred objects when storing data.

Push the contents of your coffeerun directory into a new public GitHub repository
