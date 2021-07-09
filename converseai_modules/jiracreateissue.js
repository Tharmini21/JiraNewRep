const Axios   = require('axios');
'use strict';

const Status          = require('@converseai/plugins-sdk').Status;
const ModuleResponse  = require('@converseai/plugins-sdk').Payloads.ModuleResponse;
const ErrorResponse = require('@converseai/plugins-sdk').Payloads.ErrorResponse;
//const Utils = require('../lib/utils.js');

module.exports = function jiracreateissue (app, body) {
  var moduleParam = body.payload.moduleParam;
  var columnsString = "";
  var columns = moduleParam.columns;

  // if (columns && columns.length > 0) {

  //   columnsString = "";

  //   for (var i = 0; i < columns.length; i++) {

  //     if (i > 0) {
  //       columnsString += ",";
  //     }

  //     columnsString += columns[i];
  //   }
  // }

  var oauthToken = null;

  if (moduleParam.useProviderOAuth) {
    oauthToken = body.payload.providerOAuth;
    if (!oauthToken) {
      app.send(Status.FAIL, new ErrorResponse(400, "INTERNAL", "Needs valid provider plugin authentication"));
      return;
    }
  }
  else {
    oauthToken = body.payload.invokerOAuth;
    if (!oauthToken) {
      app.send(Status.NEED_AUTH, null);
      return;
    }
  }
  // var conn = Utils.createConnection(oauthToken, body);
  // if (conn.error != null) {
  //   if (conn.needAuth) {
  //     if (moduleParam.useProviderOAuth) {
  //       app.send(Status.FAIL, new ErrorResponse(400, "INTERNAL", "Needs valid provider plugin authentication"));
  //     } else {
  //       app.send(Status.NEED_AUTH, null);
  //     }
  //     return;
  //   }
  //   app.send(Status.FAIL, new ErrorResponse(400, "INTERNAL", conn.error));
  //   return;
  // }
  try{
    async function createIssue(req, res) {
      var Http = require('machinepack-http');
      var baseUrl ="https://jirasoft123.atlassian.net";
      Http.sendHttpRequest({
        url: '/rest/api/2/issue/',
        baseUrl: baseUrl,
        method: 'post',
        params: {
          "fields": {
            "project": {
              "key": req.body.columns.project
            },
            "summary": req.body.columns.summary,
            "description": req.body.columns.description,
            "issuetype": {
              "name": req.body.columns.issuetype
            }
          }
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         // "Authorization": "Bearer"+ requestAccessToken
        },
      }).exec({
        serverError: function(result) {
          res.send("server error" + JSON.stringify(result))
        },
        success: function(result) {
          res.send("issue has been created successfully");
        },
      });
    }
  }
  catch (err) {
    var errString = "failed to create jira issue" + String(err);
    console.error(errString);
    app.send(Status.FAIL, new ErrorResponse(400, "INTERNAL", errString));
  }
  /** @type {ModuleResponse} response The Converse AI response to respond with. */
var response = new ModuleResponse();
response.setComment(['Jira issue created']);
app.send(Status.SUCCESS, response);
};
