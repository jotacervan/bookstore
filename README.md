# Bookstore

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `cd bookstore`
* `npm install`

## Running / Development

* This application depends on the [bookstore-api] backend to run.
* Start the [bookstore-api] server first and then start your ember server.
* `ember server --proxy http://localhost:3000`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

  
[bookstore-api]: <https://github.com/jotacervan/bookstore-api>
