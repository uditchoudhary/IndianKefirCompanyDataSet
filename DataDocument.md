## Home / Landing Page

### Product category 
-- Get the Product category ( Probiotics and organics )
>> http://localhost:9700/categories
>> https://yuvva-backend.herokuapp.com/categories


## Fetch Item with item id and fetch all
### individual item for Product details page
>> http://localhost:9700/items/?item=10101
>> https://yuvva-backend.herokuapp.com/items/?item=10101

### all items
>> http://localhost:9700/items/
>> https://yuvva-backend.herokuapp.com/items/

## Probiotics Page
-- Get all the probitocs items
>> http://localhost:9700/probiotics/all
>> https://yuvva-backend.herokuapp.com/probiotics/all

### probiotic details
>> http://localhost:9700/probiotics
>> https://yuvva-backend.herokuapp.com/probiotics


## Organic Page
-- Get the Organic category details ( may be pass through the component )
-- -- get All the Organic items
>> http://localhost:9700/organics/all
>> https://yuvva-backend.herokuapp.com/organics/all

### Organics details
-- Get details of each product category
>> http://localhost:9700/organics
>> https://yuvva-backend.herokuapp.com/organics


## Login / Register modal

### Register auth API
#### Request Body:
{
	"name": "udit choudhary",
	"email": "test@test.com",
	"password": "password"
    "isAdmin": true   //Optional
}
#### Registration URI
>> http://localhost:5001/api/auth/register
#### Success response
{
    "message": "Regisration Successfull",
    "redirect": "/login"
}
#### User already exist response
{
    "statusText": "USER_EXIST",
    "redirect": "/login"
}
#### Failure
Request to register failed due to server issue
{
  statusText: "SERVER_ERROR",
  redirect: "/",
}


### Login auth API  

### Login Body
{
	"email": "udit@test.com",
	"password": "password"
}
#### Login URI
>> http://localhost:5001/api/auth/login

#### Authentication Failure response 
{
    "statusText": "USER_DOES_NOT_EXIST",
    "redirect": "/register"
}

#### Authentication Success response
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWIwMDM2NTE5NzQ1Y2M0ODQ4Y2MyOSIsImlhdCI6MTY1MDEzMTM2MSwiZXhwIjoxNjUxOTMxMzYxfQ.PT_o1B2mjxIMCFIljNbD4nzYyWJJb_sSF03WB3pdnio"
}


### Logout button
-- Delete token from client side on Logout ( no need for a call )

### Admin Actions
--- Get all the users
>> http://localhost:5001/api/auth/users
>>
set bearer token received while log in 
For all other users, its access denied

### Fetch User Profile - use bearer token
>> http://localhost:5001/api/auth/profile
>>

Response: 
{
    "name": "udit admin",
    "email": "udit-admin@test.com",
    "isAdmin": true
}

Checkout Page / Summary Page
-- Add items to cart - using user _id 
-- Get the cart details - use user _id for that

Extra Calls:

-- Post calls to add a product. Option will be provided for admin user only
-- Fetch Rules of discount from backend 
-- Product Review ( get and post )


Calculation Logic: 
-- Login will be written at backend api to calculate and provide the total price at cart page
-- while selecting number of items from dropdown, logic can be written on frontend 



Addiotional Fetures can be added :
-- Get all the deals 
-- get all the deals related to a product




-------------------
Kambucha / Kefir
-------------------

only one size : 330 ml : rs 250
buy any 2 - 12 % off
buy any 4 - 20 % off 
buy any 8 - 25 % off
buy any 12 - 35 % off 
buy any 20 - 40 % off 

Kambucha / Kefir Trial pack : 4 for rs 800, 1PC EACH FLAVOUR
Create your own box : 12 for rs 1950, minimum 2 pc each 
Box of 24 : 24 for rs 3600, minimum 2 pc each 


-------------------
Sauerkraut
-------------------

Cabbage + Beetroot
Only one size : 225 grams

buy one: rs 250
buy two: rs 400 - 20% off 
