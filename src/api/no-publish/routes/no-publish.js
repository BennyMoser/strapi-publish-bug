'use strict';

/**
 * no-publish router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::no-publish.no-publish');
