# Yuvva Indian Kefir Company - RestAPIs 
-------------------

Authenticated APIs Repository: https://github.com/uditchoudhary/yuvva-auth
Unauthenticated APIs Repository: https://github.com/uditchoudhary/yuvva-backend
-------------------

## Home / Landing Page / Product Pages
-------------------


### (GET) Product category 
Get the Product categories

```
GET: https://yuvva-backend.herokuapp.com/categories
```

### Fetch Item with item id and fetch all

#### individual item for Product details page
```
GET: https://yuvva-backend.herokuapp.com/items/?item=10101
```

#### fetch all items
```
GET: https://yuvva-backend.herokuapp.com/items/
```
-------------------

### Probiotics Page
#### Get all probiotics items
```
GET: https://yuvva-backend.herokuapp.com/probiotics/all
```

#### Probiotic Details
```
GET: https://yuvva-backend.herokuapp.com/probiotics
```
-------------------

### Organic Page
#### get All the Organic items
```
GET: https://yuvva-backend.herokuapp.com/organics/all
```

### Organics details
```
GET: https://yuvva-backend.herokuapp.com/organics
```
-------------------

## Login / Register modal
-------------------


### Register auth API
#### Request Body:
```
{
	"email": "udit-admin5@test.com",
	"password": "password",
	"name": "udit admin",
    	"phone": 642200000,
	"isAdmin": true // optional
}
```
#### Registration API
```
POST: http://yuvva-auth.herokuapp.com/api/auth/register
```
#### Success response
```
{
    "message": "Regisration Successfull",
    "redirect": "/login"
}
```
#### User already exist response
```
{
    "statusText": "USER_EXIST",
    "redirect": "/login"
}
```
#### Failure
Request to register failed due to server issue
```
{
  statusText: "SERVER_ERROR",
  redirect: "/",
}
```
-------------------
### Login auth API  
-------------------
#### Login Request Body
```
{
	"email": "udit@test.com",
	"password": "password"
}
```
#### Login API
```
POST: http://yuvva-auth.herokuapp.com/api/auth/login
```

#### Authentication Failure response 
```
{
    "statusText": "USER_DOES_NOT_EXIST",
    "redirect": "/register"
}
```

#### Authentication Success response
```
{
    "auth": true,
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWIwMDM2NTE5NzQ1Y2M0ODQ4Y2MyOSIsImlhdCI6MTY1MDEzMTM2MSwiZXhwIjoxNjUxOTMxMzYxfQ.PT_o1B2mjxIMCFIljNbD4nzYyWJJb_sSF03WB3pdnio"
}
```
-------------------
### Admin / User Actions
-------------------
* Set bearer token received while log in for all the auth request
* else users will getaccess denied 

#### Admin: Get all the users
```
GET: http://yuvva-auth.herokuapp.com/api/auth/users
```
-------------------
#### Fetch User Profile - use bearer token
```
GET: http://yuvva-auth.herokuapp.com/api/auth/profile
```

#### Response: 
```
{
    "name": "udit admin",
    "email": "udit-admin@test.com",
    "isAdmin": true
}
```
-------------------
### Cart Management - use bearer token from login
-------------------
#### Add to cart

##### Logic: 
1. When user has a cart already. 
- Check if item is already in the cart. <br/>
Yes -> Update the quantity and total cost. <br/> 
No -> Add item to the cart item list. <br/>
2. When user doesnt have a cart. 
- Create a new cart and add item to it. 

#### Add item to cart API
```
POST: http://yuvva-auth.herokuapp.com/api/auth/cartadditem
```
#### Request body: 
```
{
    "quantity": 2,
    "_id": "62594a74484a4e95fb0f95f6",
    "item_name": "Apple Cinnamon",
    "size": 330,
    "price": 250,
    "item_id": 10101
}
```
-------------------
#### Remove item from cart
##### Logic:
1. remove the item from the cart 
2. update the price ( TBD )

#### Remove item from cart API
```
POST: http://yuvva-auth.herokuapp.com/api/auth/cartremoveitem
```

#### Request body: item list object id 
```
{
    "_id":"62594a74484a4e95fb0f95f6"
}
```
-------------------
#### User view cart 
```
GET: http://yuvva-auth.herokuapp.com/api/auth/cart
```
-------------------
-------------------

# Future work

-------------------
-------------------


--- Admin get all orders 
--- Admin delete order

-- Post calls to add a product. Option will be provided for admin user only
-- Fetch Rules of discount from backend 
-- Product Review ( get and post )
-- add to cart without login 
-- checkout with login or as a guest user

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
