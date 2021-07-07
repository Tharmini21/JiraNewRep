/**
 * @file plugins.js
 * @name cloudwave_jiracreateissue
 * @description Plugin to integrate with Jira 
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 *
 * IMPORTANT: THIS FILE IS AUTO GENERATED, CHANGES MAY BE OVERRIDDEN!
 */

'use strict';
const ConversePluginsSDK = require('@converseai/plugins-sdk');
const RegProviders       = require('./converseai_providers');
const OAuth              = require('./converseai_oauth');

/**
 * cloudwave_jiracreateissue plugin. To be used with
 * Converse AI Plugins SDK.
 *
 * @example
 * const converseai  = require('plugins.js');
 * const express     = require('express');
 * const bodyParser  = require('body-parser');
 *
 * var server = express();
 *
 * server.use(bodyParser.json());
 * server.post('/', function (req, res) {
 *    converseai.cloudwave_jiracreateissue(req, res);
 * });
 *
 * @param {Object} request Express HTTP request object.
 * @param {Object} response Express HTTP response object.
 */
exports.cloudwave_jiracreateissue = function (request, response) {
  var app = new ConversePluginsSDK.http({ request, response });

  if (request && request.headers && request.headers['x_converse_app_token'] && request.headers['x_converse_app_token'] === require('./app-token')) {

    app.setOnProviderRegister(RegProviders.onProviderRegister);
    app.setOnProviderUnregister(RegProviders.onProviderUnregister);

    app.setOnOAuthStart(OAuth.onOAuthStart);
    app.setOnOAuthHandleCode(OAuth.onOAuthHandleCode);
    app.setOnOAuthRenewToken(OAuth.onOAuthRenewToken);

    app.setModules({
      jiracreateissue: require('./converseai_modules/jiracreateissue')
    });



    app.handleRequest();
  } else {
    app._handleError(403, 'FORBIDDEN_APP_TOKEN', 'Forbidden app token set.');
  }
};
