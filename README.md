Meal App challenge
The mealapp implementation for the ALCwithForloop workshop

The App is hosted on github pages [ here ](https://itsdenty.github.io/MealApp/index.html).

The App API is hosted on heroku [ here ](https://meal-app-andela.herokuapp.com/api-docs/).

[![Build Status](https://travis-ci.org/Itsdenty/MealApp.svg?branch=develop)](https://travis-ci.org/Itsdenty/MealApp) 
[![Coverage Status](https://coveralls.io/repos/github/Itsdenty/MealApp/badge.svg?branch=ch-fix-travis-build-error)](https://coveralls.io/github/Itsdenty/MealApp?branch=ch-fix-travis-build-error)
[![Maintainability](https://api.codeclimate.com/v1/badges/5a4864a1bdf51fb7047f/maintainability)](https://codeclimate.com/github/Itsdenty/MealApp/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5a4864a1bdf51fb7047f/test_coverage)](https://codeclimate.com/github/Itsdenty/MealApp/test_coverage)
## Made With
  ### UI
    * HTML for writing the webpage
    * CSS for styling
    * Javascript to add some behaviour
  
  ### Server
    * Nodejs for server-side logic
    * Babel for transpiling
    * Express for api routes implementation
    * Heroku for hosting services
    * PostgreSql for the App database
    * Swagger for documentation

## Structure of the backend
    *The server folder holds the backend code
    *The config folder holds the postgress connection configuration
    *The controller file holds the code for handling requests processing it through the 
    processor queries and returning a transformed result via the transformer file
    *The database folder holds the database seeder and migration files
    *The middlewares folder holds the middleware files/functions for input validation,
    authentication check and authorization checks
    *The processor folder holds the files/functions for database queries and return the
    result to the controller
    *The public folder holds the ui for the apidocs
    *The routes folder holds the files for the routes
    *The swagger folder holds the files for the swagger documentation
    *The tests folder holds the files for integrated tests
    *The utils folder holds helper functions often reused accross the app such as the
    response transformer function.

  ### Continuous Integration
    * Travis CI & Codeclimate for test automation
    * Coveralls for test coverage report
  
  ### Test-Driven Development
    * Mocha, Chai and Supertest for api route testing

## Installation.
  * Install [Nodejs](https://nodejs.org/en/download/)
  * Clone this repo ``` git clone https://github.com/itsdenty/andela-vlf-challenge.git ```
  * Run ```npm install``` to install the required dependencies
  * Copy .env.example and edit to match your database information
  * Run npm run migrate to migrate tables to database
  * Run npm run seed (to seed roles and the super admin (caterer))
  * Run ```npm test:dev``` to fireup the tests (currently only covers the user module)
  * Run npm start to start the app
  * Navigate to http://localhost:3100/api/v1/api-docs to test current endpoints

## Features of the template
* Users can Signup and log in on the app.
* User Can View current menu.
* User can chose menu of choice to place on order.
* User can place a meal order
* Admin can create meals
* Admin can manage a menu list for the day
* Admin can view orders
* Admin can review the profit/sales made for each day

## Available APIs
<table>
  <tr>
      <th>HTTP REQUEST VERB</th>
      <th>API ENDPOINT/PATH</th>
      <th>ACTION</th>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/</td>
      <td>Welcomes users to the application</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/user/signup</td>
      <td>Registers a new user on the app</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/user/login</td>
      <td>Logs in a registered user</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/meal</td>
      <td>Allows admin to create a meal</td>
  </tr>
  <tr>
      <td>PATCH</td>
      <td>/api/v1/meal/:id</td>
      <td>Allows admin to update a specific meals</td>
  </tr>
  <tr>
      <td>DELETE</td>
      <td>/api/v1/meal/:id</td>
      <td>Allows an admin to delete a specific meal</td>
  </tr>
  <tr>
      <td>PATCH</td>
      <td>/api/v1/menu/:id</td>
      <td>Allows an add a meal to the day's menu</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/menu</td>
      <td>Allows a user to get the current menu</td>
  </tr>
  <tr>
      <td>DELETE</td>
      <td>/api/v1/menu</td>
      <td>Allows the admin to remove an item from the day's menu</td>
  </tr>
</table>

## License and Copyright
&copy; Abd-afeez Abd-hamid

Licensed under the [MIT License](LICENSE).
