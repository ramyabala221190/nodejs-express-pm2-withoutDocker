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
};
