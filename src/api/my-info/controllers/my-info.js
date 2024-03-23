'use strict'

/**
 * my-info controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::my-info.my-info',
  ({ strapi }) => ({
    setHeaders(ctx) {
      ctx.response.headers = {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Controll-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH'
      }
    }
  })
)
