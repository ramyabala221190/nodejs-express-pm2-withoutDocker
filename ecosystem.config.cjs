module.exports = {
  apps : [{
    name:'my-app',
    script: 'src/app.js',
    append_env_to_name: true,
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
       "user" : "azureuser",
       "host" : ["191.235.235.158"],
       "ref"  : "origin/master",
       "repo" : "https://github.com/ramyabala221190/nodejs-express-pm2-withoutDocker",
       "path" : "/var/prod/onlypm2/",
      // "pre-setup":"sudo chmod +777 /var/",
       "post-setup":"sudo chmod +777 /var/ && node --version && npm --version && pm2 --version && npm install",
       "post-deploy" : "npm run pm2-prod-start"
    },
    development:{
      "user" : "azureuser",
      "host" : ["20.206.106.236"],
      "ref"  : "origin/master",
      "repo" : "https://github.com/ramyabala221190/nodejs-express-pm2-withoutDocker",
      "path" : "/var/dev/onlypm2/",
      //"pre-setup":"sudo chmod +777 /var/",
     // "post-setup":"sudo chmod +777 /var/ && node --version && npm --version && pm2 --version && npm install",
      "post-deploy" : "npm install && npm run pm2-dev-start"
    }
  }
};

