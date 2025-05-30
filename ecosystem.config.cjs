module.exports = {
  apps : [{
    name:'my-app',
    script: 'src/app.js',
    append_env_to_name: true, // <===== add this line
    watch: 'src/',
    env:{
      NODE_ENV:'production'
    },
    env_development:{
      DOTENV_CONFIG_PATH:'.env.development'
    },
    env_production:{
      DOTENV_CONFIG_PATH:'.env.production'
    },
    node_args:`-r dotenv/config`
  },],
  deploy : {
    production : {
       "key": "C:/Users/User/.ssh/id_rsa.pub",
       "user" : "azureuser22",
       "host" : ["4.201.137.36"],
       "ref"  : "origin/master",
       "repo" : "https://github.com/ramyabala221190/nodejs-express-pm2-withoutDocker",
       "path" : "/var/prod/onlypm2/",
       "post-deploy" : "npm install && npm install -g pm2 && npm run pm2-prod"
    },
    development:{
      "user" : "azureuser22",
      "host" : ["4.201.137.36"],
      "ref"  : "origin/master",
      "repo" : "https://github.com/ramyabala221190/nodejs-express-pm2-withoutDocker",
      "path" : "/var/dev/onlypm2/",
      "post-deploy" : "npm install && npm install -g pm2 && npm run pm2-dev"
    }
  }
};

