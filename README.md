
# A la Romana App

Esta app esta destinada a un local gastronómico para compras a través de la web.



## Authors

-Maximiliano Villegas


## Demo

Insert gif or link to demo


## Documentation

para este proyecto necesitaremos instalar
node js 
https://nodejs.org/es


Utilizamos vite que  es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.

(docs)https://vitejs.dev/guide/

Para nuestro proyecto también es necesario instalar las siguientes dependencias:

bootstrap:
https://getbootstrap.com/docs/5.2/getting-started/introduction/

react-bootstrap:
https://react-bootstrap.netlify.app/docs/getting-started/introduction

react-router-dom:
https://www.npmjs.com/package/react-router-dom

react-icons
https://www.npmjs.com/package/react-icons

firebase
https://firebase.google.com/docs/web/setup?hl=es

firestore config collection:

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnQuIII3jEc98OcC--ZqyPA2--rpBJzkM",
  authDomain: "a-la-romana-cfadf.firebaseapp.com",
  projectId: "a-la-romana-cfadf",
  storageBucket: "a-la-romana-cfadf.appspot.com",
  messagingSenderId: "140437336042",
  appId: "1:140437336042:web:c29580c585f9d7435c8c93",
  measurementId: "G-5JWTTD26Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    

## Instalación

para este proyecto necesitaremos instalar
node js 
https://nodejs.org/es
descargar(opción recomendado para la mayoría)y ejecutar el instalador

Utilizamos Vite que  es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.

Para nuestro proyecto también es necesario instalar las siguientes dependencias, 
desde la consola ejecute lo siguiente
para bootstrap:
```
npm i --save bootstrap @popperjs/core
```
```
npm i --save-dev sass
```

para react-bootstrap:
```
npm install react-bootstrap bootstrap
```
para react-router-dom:
```
npm i react-router-dom
```
para react-icons
```
   npm i react-icons
```
para firebase
 ```
 npm install firebase
```
para el hosting en firebase
```
npm install -g firebase-tools
```