# team38: PrepMe
## Starting the webapp
`cd prepme`\
`npm install`\
`npm start`

## Database Setup
Make sure you have installed mongodb community edition prior to this.
1. `cd prepme`
2. `mkdir mongo-data`\
This folder can be called whatever you want, 
however `mongo-data` is currently added to the `.gitignore`, so no extra step is required.
However if you would like to call this something else, then please add it to the folder
to the `.gitignore`.\
3.  If on Windows:

    `"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="./mongo-data"`
    
    If on MacOS or Linux:
    
    `mongod --dbath mongo-data`
    
    If you called your folder something else in Step 2, substitute that for `mongo-data` in either
    of the above commands.

## User Interactions
First, login using the following credentials:\
username: user\
password: user

Next, you will be redirected to the main Events page.
Here, you can view already created events, join events, as well as create your
own event using the button at the top of the page, which will present a new interface
for entering the event details.

On the left sidebar, there are navigation buttons for navigating between the main events
page and the user profile page.

On the user profile page, you will find your user rating, as well as a display of the
events you've created or joined.

Navigating between these pages also changes the right sidebar's contents.
On the main event page, the right sidebar presents filters for filtering events by
various parameters.
On the user profile page, the right sidebar presents an interface to change the user's
password.

On either page, viewing an event will open a new interface displaying the event's detailed
information. Editing your own event will open a similar interface where the information
can be changed.

## Admin Interactions
First, login using the following credentials:\
username: admin\
password: admin

Next, you will be redirected to the main Events page.
Here, you can view already created events, join events, as well as create your
own event using the button at the top of the page, which will present a new interface
for entering the event details.

On the left sidebar, there are navigation buttons for navigating between the main events
page and the users page which displays all the users on the platform. This page is 
restricted to admins.

On the users page, you will find a list of all the users on the platform along with their
rating, and the ability to change their passwords if a user is locked out of their account.

Navigating between these pages also changes the right sidebar's contents.
On the main event page, the right sidebar presents filters for filtering events by
various parameters.
On the users page, the right sidebar presents filters for filtering users by various parameters.

On either page, viewing an event will open a new interface displaying the event's detailed
information. Editing any event will open a similar interface where the information
can be changed. Admins, unlike regular users, are able to edit any event, event those not
created by them.
