# Name

Global :globe_with_meridians:

## Details

I made Global to develop an understanding of connecting up a back-end with front-end components and serving user specific data to the client-side. 

I opted to use Firebase to do this, utilising the latest modular Firebase 9 syntax. Images are uploaded to Firebase Storage, synced with Cloud Firestore, and then a snapshot is taken to update the front-end. A basic user login was added with Firebase authentication. Authetication state is shared across the application using React's Context API.

The project allowed me to develop a clearer understanding of how API's can act as a back-end in a serverless setup. I expanded my knowledge on react hooks (useEffect, useState, useContext), and JavaScript array methods (.map, .forEach) and how they can be used in a real-world application.

## How To Use

Create a user account and sign in. Once you are at the dashboard, upload images using the plus sign in the dashboard. Uploaded images will then display in the gallery and can be deleted if needed. 

## Features

* User Dashboard.
* User image upload.

# Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.