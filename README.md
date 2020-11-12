# EARTHY BURGER

<img src="public/assets/img/burgerapp.JPG"  alt="Burger app">

## DESCRIPTION

EARTHY BURGER is a restaurant application that lets users to input the names of burgers they would like to eat and devour them.

## USAGE

* Whenever a user submits a burger's name,app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Burgers that are devoured have an option to trash them, i.e., this deletes the burger from database. 

* This app will store every burger in a database, whether devoured or not.

## Routing

All the below routes uses Home-grown ORM CRUD Functions

1. GET / : Reads all entries from database and renders them to the Client using handlebars.
2. GET /api/burgers : Reads all entries from the database and returns the json object of burgers array.
3. POST /api/burgers : Creates a new burger and adds it to the database when 'place an order' button is clicked.
4. PUT /api/burgers/:id : Updates a burger using its primary key(ID) which changes devoured status and place the burgers in devoured area 
   when 'Devour It' button is clicked.
5. DELETE /api/burgers/:id : Deletes a burger from the devoured area using its primary key(ID).


## URL Deployed on Heroku

https://glacial-river-89645.herokuapp.com/

