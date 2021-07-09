const Axios   = require('axios');
'use strict';

const Status          = require('@converseai/plugins-sdk').Status;
const ModuleResponse  = require('@converseai/plugins-sdk').Payloads.ModuleResponse;
const ErrorResponse = require('@converseai/plugins-sdk').Payloads.ErrorResponse;

module.exports = function jiragetissue (app, body) {
  var moduleParam = body.payload.moduleParam;
  var columnsString = "";
  var columns = moduleParam.columns;
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
 
    // async function getIssue(req, res) {
    //   var Http = require('machinepack-http');
    //   var baseUrl ="https://jirasoft123.atlassian.net";
    //   Http.sendHttpRequest({
    //     url: '/rest/api/2/issue/{issueIdOrKey}',
    //     baseUrl: baseUrl,
    //     method: 'get',
    //     params: {
    //       "fields": {
    //         "issueIdOrKey": req.body.columns.issueIdOrKey,
    //       }
    //     },
    //     // headers: {
    //     //   "Authorization": "Bearer"+ access_token;
    //     // },
    //   }).exec({
    //     serverError: function(result) {
    //       res.send("server error" + JSON.stringify(result))
    //     },
    //     success: function(result) {
    //       res.send("fetch issue successfully");
    //     },
    //   });
    // }
    async function getIssue(req, res) {
    try 
    {
      var baseUrl ="https://jirasoft123.atlassian.net/rest/api/2/issue/{issueIdOrKey}";
      var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          //"Authorization": "Bearer"+ access_token;
      };
      var data={
        params: {
            "fields": 
             {
                  "issueIdOrKey": req.body.columns.issueIdOrKey,
             }
        }
      };
      const response = await axios({
          method: 'get',
          url: baseUrl,
          data: data,
          headers: headers
      });
     
      return await JSON.stringify(response);
    }
    catch (error) {
      console.log('failed to get jira issue details' + String(error));
    }
  }
   
  /** @type {ModuleResponse} response The Converse AI response to respond with. */
var response = new ModuleResponse();
response.setComment("");
app.send(Status.SUCCESS, response);
};
