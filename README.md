# mysql-plus-api

Express api using MySQL transactions and different dead simple api calls

## Getting Started
You can find [DOCS](#DOCS) at the end of the page

Make sure that you are putting your database credentials in `db/index.js` file

```js
const connection = mysql.createConnection({
  host: '<database host>',
  user: '<database username>',
  password: '<database password>',
  database: '<database name>'
})

```

A table named `todolist` must be created in your database with `owner` and `task` columns to be compatible with the transactions.

You can copy and run the following code to create a table

```mysql
--This creates the table for your need

CREATE TABLE todolist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  owner VARCHAR(30) NOT NULL,
  task TEXT NOT NULL
);

```

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

See [deployment](#Deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them


- [Visual Studio Code (recommended)](https://code.visualstudio.com/)

- [Node](https://nodejs.org/en/download/)


### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm install
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Run `node bin/www` to start the application

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Volkan Güven** - *Initial work* - [knoxgon](https://github.com/knoxgon)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## DOCS


