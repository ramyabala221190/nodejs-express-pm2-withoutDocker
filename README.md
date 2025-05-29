In this project, we are trying to load environment variables for a particular environment using dotenv.
We are not using docker. We are just using pm2.

Steps:

1. npm init. Add "type":"module" in package.json to declare all .js files as ES6 modules.
2. Add src folder with app.js
3. Install express and install dotenv as dev dependency. pm2 is already installed globally.
4. Run "pm2 ecosystem" to generate ecosystem.config.js. Rename to ecosystem.config.cjs because it is a
Common JS module and not ES6 module.

In this file,

    append_env_to_name: true, // <===== add this line
    This ensures I can run multiple environments of the application on the same server.
    This property appends the environment name passed to the --env flag to the name of the app.
    The name of the app comes from "name" field in the same file.
    

env:{
      NODE_ENV:'production'
    },
means that all environments by default will take NODE_ENV as 'production'. This is a great place to define defaults.

Next moving to environment specific variables. Here i have just defined those variables necessary for
dotenv to function.

  env_development:{
      DOTENV_CONFIG_PATH:'.env.development'
    },
    env_production:{
      DOTENV_CONFIG_PATH:'.env.production'
    },

DOTENV_CONFIG_PATH is a variable defined to indicate to dotenv
package which .env file to pick.

We are storing all other variables in .env.development and .env.production files in the root of the project. These files will not be committed into the source control. They will be mentioned in the 
.gitignore file so that any sensitive information is not leaked.

APP_ENV defines the target environment the app is running in.

.env.development

PORT=3000
APP_ENV=development
api-key=dev-api-key

.env.production

PORT=8080
APP_ENV=production
api-key=prod-api-key

Finally,     node_args:`-r dotenv/config`
We are executing the dotenv command here so that no dotenv code is required the src code.

5. Finally, in the package.json, we are running the application using the pm2 commands.

 "pm2-dev": "pm2 start ecosystem.config.cjs --env development",
"pm2-prod": "pm2 start ecosystem.config.cjs --env production"

Although I have defined 2 seperate commands, just 1 command is sufficient, where the
target environment can be fetched from any environment variable set in the pipeline.
The target environment passed to --env flag decides which environment is selected in the ecosystem.config.cjs file.

"start":"pm2 start ecosystem.config.cjs --env ${env}"