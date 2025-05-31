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
      DOTENV_CONFIG_PATH:'.env.development',
      PORT:3000,
      APP_ENV:'development'
    },
    env_production:{
      DOTENV_CONFIG_PATH:'.env.production',
      PORT:8080,
      APP_ENV:'production'
    },
    node_args:`-r dotenv/config`
  },],
  deploy : {
    production : {
       "user" : "azureuser22",
       "host" : ["4.201.137.36"],
       "ref"  : "origin/master",
       "repo" : "https://github.com/ramyabala221190/nodejs-express-pm2-withoutDocker",
       "path" : "/var/prod/onlypm2/",
       "pre-setup":"sudo chmod +777 /var/",
       "post-setup":"node --version && npm --version && pm2 --version && npm install",
       "post-deploy" : "npm run pm2-prod-start"
    },
    development:{
      "user" : "azureuser22",
      "host" : ["4.201.137.36"],
      "ref"  : "origin/master",
      "repo" : "https://github.com/ramyabala221190/nodejs-express-pm2-withoutDocker",
      "path" : "/var/dev/onlypm2/",
      "pre-setup":"sudo chmod +755 /var/ /usr/local/lib/ /usr/local/bin/",
      "post-setup":"node --version && npm --version && pm2 --version && npm install",
      "post-deploy" : "npm run pm2-dev-start"
    }
  }
};

