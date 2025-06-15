In this project, we are trying to load environment variables for a particular environment using dotenv.
We are not using docker. We are just using pm2.

Steps:

1. npm init. Add "type":"module" in package.json to declare all .js files as ES6 modules.
2. Add src folder with app.js
3. Install express and install dotenv as dev dependency. pm2 is already installed globally.
4. Run "pm2 ecosystem" to generate ecosystem.config.js. Rename to ecosystem.config.cjs because it is a
Common JS module and not ES6 module.

