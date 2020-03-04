# team38: PrepMe
## Starting the webapp
`cd prepme`\
`npm install`\
`npm start`

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