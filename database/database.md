# What is A DataBase?

> A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). an organized collection of structured information or data , controlled by A DBMS database management systems..

## RDBMS

> A relational database management system (RDBMS) is a collection of programs and capabilities that enable IT teams and others to create, update, administer and otherwise interact with a relational database. RDBMSes store data in the form of tables, with most commercial relational database management systems using Structured Query Language (SQL) to access the database.

## Object-Relational-Mapping

> An object-relational mapper (ORM) is a code library that automates the transfer of data stored in relational database tables into objects that are more commonly used in application code.

### Sequelize:

> Sequelize is a promise-based Node.js ORM(object relational mapping)tool for Postgres, MySQL, MariaDB, SQLite, Microsoft SQL Server, Amazon Redshift and Snowflake’s Data Cloud. It features solid transaction support, relations, eager and lazy loading, read replication and more.

* ORM(object relational mapping) => sql , postgres, sqllite => Ms sql => mysql
* ODM (object data model) => mongodb =>  Amazon 


``npm i pg sequelize``

### pg - node-postgres

> node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database. It has support for callbacks, promises, async/await, connection pooling, prepared statements, cursors, streaming results, C/C++ bindings, rich type parsing, and more!

```javascript
//models - index.js
'use strict'

const { Sequelize, DataTypes } = require('sequelize');
const people = require('./people.model.js');

//prepare the connection
const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {};

let sequelize = new Sequelize(POSTGRES_URL,{});

module.exports = {
    db: sequelize,//for real connection and will use it in index.js
    People: people(sequelize, DataTypes)// for creating the table and will use it in our route
}

//people.model.js
'use strict'

const People = (sequelize, DataTypes) => sequelize.define('people', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    }
})

module.exports = People
```

```
//evn

DATABASE_URL=postgresql://tahany:12345@localhost:5432/class3
```

```bash
//start postgres
> psql
> \l
> CREATE DATABASE class3
```