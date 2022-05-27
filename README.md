# Node Js Start

## What is Node JS

* It is a backend **javascript runtime environment** that runs on the v8 engine and excute javascript code outside the web browser.
* it is an open source cross-platform(works on multiple operating systems or devices) backend javascript runtime environment it runs on v8 engine .
(server side).

* As an asynchronous event-driven JavaScript runtime.

## What is Express

* it is a backend web application node js framework, in order to design and build web applications and API's.

### What is an API's

* Application programming interface
* It is a lightweight web application that allows users to create and expose data from any data source by sending requests to it .
* APIs are a set of functions and procedures that allow for the creation of applications. They access the data and features of other applications, services, or operating systems.

> WRRC => web request response cycle.

**_your server should deal with database .._**

### What is RESTful API

> REpresentational State Transfer
 is an architectural style for an application program interface (API) that uses HTTP requests to access and use data.

* Read => GET
* Add => POST
* Update => PUT
* Delete => DELETE

### Framework

* is a set of libraries => excute your code
* is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch.
* it have some constraints.
ex: VS code

### Library

* set of functions => excuted by your code
* collections of prewritten code that users can use to optimize tasks.

### CI/CD concepts

> With the continuous method of software development, you continuously build, test, and deploy iterative code changes. This iterative process helps reduce the chance that you develop new code based on buggy or failed previous versions.

#### steps to create our express server

```bash
npm init -y

## change start server.js to index.js
"start": "node index.js" 
## create server

npm i express dotenv nodemon

"start": "nodemon index.js"

npm start

npm i --save-dev jest supertest
## OR
npm i -D jest supertest

"test": "jest --coverage --verbose",
```