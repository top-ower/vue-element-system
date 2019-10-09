'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '""',
  BASE_APP_NAME: '"/tcloud-app-back"',
  BASE_PARJECT_NAME: '"/ember-web"',
  EPH_PARJECT_NAME: '"http://www.cloudwarm.net/EPH"',
  BASE_PUBLIC: '""'
})
