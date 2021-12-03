# Practicing Form with React, TS and Material UI

## Description

After 10 weeks in Angular I felt I nedded to polish my skilles in React that we had learned in school earlier in the year.
And I felt that I could practice code that I am going to work with on my next internship.

I always have been a little afraid of inputs/textFields and validations. But after this one I feel a little bit more confident.

I have created a simple login, create and logout page using React, TS and Material UI.
The validation is set per field that have error. So multiple textFields is getting triggered with both error and helpText when clicking "submit".

I've got the validations solution from Brian Design on Youtube. He used classic form and input, and I used mui/core TextField and Button.
Link to video: https://www.youtube.com/watch?v=KGFG-yQD7Dw

## Try it!
[On Netlify](https://react-ts-mui-login-form.netlify.app/)

## Validations

### Login

- Username = validates against localStorage
- Password = validates against localStorage

### Create

- Username = validates against an Regex string and if the email already is in use, that validates against localStorage
- Password = not shorter than 5 letters
- ControlPassword = validates against Password
- LocalStorage = setItem('user')

### Logout
- LocalStorage = removeItem('use')

### Screens

![login](https://user-images.githubusercontent.com/70426543/144493232-80b11362-4470-4168-9702-f4d26840208e.PNG)

![create](https://user-images.githubusercontent.com/70426543/144493301-a73bcd93-8f8d-46d5-9126-789ee5be3c7d.PNG)

![create-double-user](https://user-images.githubusercontent.com/70426543/144493330-51b107d6-1e33-4301-a66e-8b56c5178554.PNG)

## Run project 

npm start

