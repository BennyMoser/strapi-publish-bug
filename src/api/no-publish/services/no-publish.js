'use strict';

/**
 * no-publish service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::no-publish.no-publish');
