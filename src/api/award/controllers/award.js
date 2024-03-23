'use strict'

/**
 * award controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::award.award',
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
