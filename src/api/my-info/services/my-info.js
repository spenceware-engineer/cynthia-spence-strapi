'use strict';

/**
 * my-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-info.my-info');
