# Simple Paytm Project

A PayTM like application that let’s users send money to each other given an initial dummy balance

<Brief>

## Backend
* Express - HTTP Server
* mongoose - ODM to connect to MongoDB
* zod - Input validation

### Setting up
* Create a workspace

## Frontend
* React - Frontend framework
* Tailwind - Styling framework

### Setting up
* Create a workspace
`$ cd Paytm
`$ npm create vite@latest`
`Project: Paytm`,`React`,`Javascript`
* Delete all the inbuilt css and unwanted things
```terminal
$ npm install
```
* Install tailwind css and create configurations file. Also add to index.css
`https://tailwindcss.com/docs/guides/vite`
* To start webpage
`$ npm run dev -- --host`



IMPORTANT KEY POINTS
1. Passwords should not be stored as plain text.
Passwords should be encrypted or hashed and then stored.
Also add salt along with password, 
so that if two hash's are same no one should guess the password.

