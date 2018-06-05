Description:
============

This project is about Customer submitted a survey form to place an insurance claim.

Set of questions to be asked are stored in a json format.

At a time only one question will be shown to the customer along with the type of input to be entered by the user.

On clicking 'continue' button next question will be displayed based on the previous inputs nextid.



TechStack used:
===============

- React 16 
- Webpack 4 , Webpack-dev-server
- Redux
- json server
- jest
- React datepicker for date field component
- CSS3

Implementation Details:
======================
- Json servers is used to host the json data
- Webpack dev server is used to build and host the application in the browser
- Using proxy's settings json data from different port is fetched from the application server port
- React date picker component is used for building the date component, to save the time and for resuablity
- thunk is used to handle the middleware


Setup and installation:
=======================

* npm i or npm install

    Use the above command to install the dependencies required for this project
* npm run server
    
    Use the above command to start the json server where the data is hosted
    
* npm run start
    
    Use the above command to build and host the application on the browser

* npm run test 
    
    Use the above command to run the unit testing, At the moment unit testing is done for only one component and its not covered completely. Shall improve this in future.


Improvements:
=============

- Page and Field validation, Storing the user entered input value in the state
- Enabling a welcome and form submitted screen rather showing an alert message
- Preventing the user from fetching future dates in certain scenarios
- Unit testing to be done for 100% code coverage
- Styling of the view using less/sass
- Making a responsive application for better user experience
- Enabling Aria labels on the fields to accomplish accessibility

