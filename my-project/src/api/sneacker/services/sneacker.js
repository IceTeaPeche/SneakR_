'use strict';

/**
 * sneacker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sneacker.sneacker');
