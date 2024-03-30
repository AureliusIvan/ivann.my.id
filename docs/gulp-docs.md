# This is general documentation for Gulp

## Gulp is a task runner that uses Node.js as a platform. It is used to automate tasks such as minification, concatenation, unit testing, linting, etc. It is a build tool that helps in automating repetitive tasks.

## Gulp is a streaming build system. It uses Node.js streams to make the build process faster and more efficient. It is easy to use and has a simple API.


## Installation

To install Gulp, you need to have Node.js installed on your system. You can install Gulp globally using npm by running the following command:

```bash
npm install -g gulp
```

You can also install Gulp locally in your project directory by running the following command:

```bash
npm install gulp --save-dev
```

## Getting Started
### Auto-Creating service, controller, model, and route
To create a new service, controller, model, and route, you can use the following command:

```bash
gulp create:controller --name <name>

gulp create:model --name <name>

gulp create:route --name <name>

gulp create:service --name <name>

gulp create:apidoc --name <name>

gulp task create:all --name <name>
```

Where `<name>` is the name of the file you want to create.