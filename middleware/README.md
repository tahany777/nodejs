# Middleware

> Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

![image](https://www.codeproject.com/KB/Nodejs/1172627/What-is-Middleware.jpg)


## cors:

> CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated.

## 1- Built-in Express middlewares

* express.static serves static assets such as HTML files, images, and so on.
* express.json parses incoming requests with JSON payloads.
* express.urlencoded parses incoming requests with URL-encoded payloads.

app.use(express.json());
app.use(cors())

## 2- Application-level middleware

> Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

```javascript
//server.js
//for all routes
app.use(logger);

//for a specific route
app.get('/',logger, (req, res) => {
    res.send('home route')
})
/**
 * 
*/
//logger.js
'use strict';

const logger = (req, res, next) => {
    req.reqData = new Date().toLocaleDateString();
    console.log('logged @', req.reqData);
    next();
}

module.exports = logger
```

## 3- Router-level middleware

> Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

## Route level middleware

```javascript
//server.js
const getAgent = require('./middleware/getAgent.js')

app.get('/test', getAgent,(req, res, next) => {
    res.json({
        message: 'test route',
        name: req.myName,
        type: req.reqType
    })
})

//getAgent.js
'use strict';

module.exports = (req, res, next) => {
    req.myName = 'Tahani';
    req.reqType = req.method;
    next();
}
```

## Route-level configurable middleware

```javascript

//server.js
app.get('/number', square(5), (req, res) => {
    res.send(`number route ${req.num}`)
})
app.get('/throwing-error', square('hi'), (req, res) => {
    res.send(`number route ${req.num}`)
})
//square.js
const square = (num) => {
    return(req, res, next) => {
        if(typeof num == 'number') {
            req.num = num * num;
            next();
        } else {
            next(`${num} is not a number`)
        }
        
    }
}
module.exports = square;
```