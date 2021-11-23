# generator-ts-scaffold [![NPM version][npm-image]][npm-url]
> Generate a scaffold for TypeScript projects

## How it works

This generator creates the scaffold structure for a TypeScript project, including
the boilerplate code for the following actions:

* Create a JS file with no dependencies (using `webpack`)
* Create a static linked binary file (using `pkg`) for macOS and Linux

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ts-scaffold using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ts-scaffold
```

Then generate your new project:

```bash
yo ts-scaffold
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

GPL-3.0 © [Arturo Fernandez](https://bsnux.github.io/)


[npm-image]: https://badge.fury.io/js/generator-ts-scaffold.svg
[npm-url]: https://npmjs.org/package/generator-ts-scaffold
