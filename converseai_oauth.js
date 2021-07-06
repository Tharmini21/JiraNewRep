/**
 * @file converseai_providers.js
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

'use strict';
//import axios from "axios";
// import querystring from "querystring";
const Status                    = require('@converseai/plugins-sdk').Status;
const OAuth2SetupDataResponse   = require('@converseai/plugins-sdk').Payloads.OAuth2SetupDataResponse;
const OAuth2HandleCodeResponse  = require('@converseai/plugins-sdk').Payloads.OAuth2HandleCodeResponse;
const Utils = require('./lib/utils.js');

const OAUTH_USER = 0;
const OAUTH_PROVIDER = 1;
var axios = require("axios").default;
/**
* Triggers the OAuth2 process.
*/
var onOAuthStart = function(app, body) {
  var app = body.payload.registrationData.app;
  // app.client_id = "JnZngY1dNSdA6UzlgbuvplTodLff5G6F";
  // app.client_secret = "Oa2YJOrNQQSEOWyG3X8tmXy3BVMbESuQWH3WV6gIUe-XcrO8neOTt8ztXu677bzj";
  
  //  var oauth2Uri = "https://auth.atlassian.com/oauth/token";
  var oauth2Uri = "https://api.atlassian.com/oauth2/authorize";
   var registrationData = body.payload.registrationData;
   var audience=api.atlassian.com;
  // var clientId = "JnZngY1dNSdA6UzlgbuvplTodLff5G6F";
  var clientId = Utils.getClientId(body);
  /** @type {OAuth2SetupDataResponse} response The Converse AI response to respond with. */
  var response = new OAuth2SetupDataResponse();
 
  response.setOAuth2URI(oauth2Uri);
  response.setExtraParams(audience);
  response.setClientID(clientId);
  // response.setScope("full refresh_token offline_access");
  response.setScope("read:jira-user write:jira-work read:jira-work");
  response.setState("");
  response.response_type("code");
  response.prompt("consent");
   
  if (body.payload.oauthType === OAUTH_PROVIDER) {
    console.log("onOAuthStart for provider");
    response.setComment("");
  } else if (registrationData.oauth && registrationData.oauth.start_message) {
    response.setComment(registrationData.oauth.start_message);
  }
  response.setExtraParams(null);
  // const redirectURI = "https://cloudwave.bridge.smartsheet.com/";
  // function getTokens(){
  //   const url = "https://auth.atlassian.com/oauth/token";
  //   const values = {
  //     code:"iF11P0jTyO4xo4RV",
  //     client_id: "JnZngY1dNSdA6UzlgbuvplTodLff5G6F",
  //     client_secret: "Oa2YJOrNQQSEOWyG3X8tmXy3BVMbESuQWH3WV6gIUe-XcrO8neOTt8ztXu677bzj",
  //     redirect_uri: "https://cloudwave.bridge.smartsheet.com/",
  //    // grant_type: "authorization_code",
  //    grant_type: "client_credentials",
  //   };
  
  //   return axios
  //     .post(url, querystring.stringify(values), {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((res) => res.data)
  //     .catch((error) => {
  //       console.error(`Failed to fetch auth tokens`);
  //       throw new Error(error.message);
  //     });
  // }
  // app.get(`/${redirectURI}`, async (req, res) => {
  //   const code = req.query.code;
  
  //   const { id_token, access_token } = await getTokens({
  //     code,
  //     clientId: "JnZngY1dNSdA6UzlgbuvplTodLff5G6F",
  //     clientSecret: "Oa2YJOrNQQSEOWyG3X8tmXy3BVMbESuQWH3WV6gIUe-XcrO8neOTt8ztXu677bzj",
  //     redirectUri: `${redirectURI}`,
  //   });
  // });
   app.send(Status.SUCCESS, response);
}

/**
* Handle the OAuth code.
*/
var onOAuthHandleCode = function(app, body) {
 /**
  * Registration parameters assigned to body.payload.registrationData.
  * @example
  * var regOne = body.payload.registrationData.regOne;
  */
  // if (body.isTest) {
  //   app.send(Status.SUCCESS, null);
  //   return
  // }

  // if (body.payload.oauthType === OAUTH_PROVIDER) {
  //   console.log("onOAuthHandleCode for provider");
  // }

  // var code = body.payload.code;

  // var conn = Utils.createConnection(null, body);
  // if (conn.error != null) {
  //   app.send(Status.FAIL, new ErrorResponse(400, "INTERNAL", conn.error));
  //   return;
  // }

  // conn.authorize(code, function(err, userInfo) {
  //   if (err) {
  //     var errString = String(err);
  //     console.error(errString);
  //     app.send(Status.FAIL, new ErrorResponse(400, "INTERNAL", errString));
  //     return;
  //   }

  /** @type {Object} app The details of the connected app to be used 
  * for authentication. If you do not supply this information then 
  * the default converse app will be used.  */
  var app = body.payload.registrationData.app;


  /** @type {OAuth2HandleCodeResponse} response The Converse AI response to respond with. */
  var response = new OAuth2HandleCodeResponse();

  // response.setAccessToken(conn.accessToken);
  // response.setRefreshToken(conn.refreshToken);
  // response.setTokenType("Bearer");
  // response.setExpiresIn(-1);
  // response.setGrantType("authorization_code");

  // if (conn.instanceUrl != "") {
  //   response.setMetadata({
  //     instanceUrl: conn.instanceUrl
  //   });
  // }

  // if (body.payload.oauthType === OAUTH_USER) {
  //   response.setMessage("Please return to your conversation");
  //   if (body.payload.registrationData.oauth) {
  //     if (body.payload.registrationData.oauth.redirect_url) {
  //       response.setMessage("");
  //       response.setRedirectURL(body.payload.registrationData.oauth.redirect_url);
  //     } else if (body.payload.registrationData.oauth.redirect_message) {
  //       response.setMessage(body.payload.registrationData.oauth.redirect_message);
  //     }
  //   }
  // } else {
  //   response.setMessage("Authentication successful");
  // }
  app.send(Status.SUCCESS, response);
//});
}

/**
* Renew the oauth token.
*/
var onOAuthRenewToken = function(app, body) {
  app.send(Status.SUCCESS, null);
}

module.exports = {
  onOAuthStart: onOAuthStart,
  onOAuthHandleCode: onOAuthHandleCode,
  onOAuthRenewToken: onOAuthRenewToken
}