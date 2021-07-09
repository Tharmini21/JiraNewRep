const Axios   = require('axios');

var tokenUrl = "https://auth.atlassian.com/oauth/token";
var baseUrl ="https://jirasoft123.atlassian.net";
// async function requestAccessToken(oauthGrant) {
//   return Axios.post(tokenUrl , oauthGrant)
//     .then(res => {
//       return res.data;
//     })
//     .catch(error => {
//       console.log(`Error requesting access token for grant type ${oauthGrant.grant_type}`);
//       throw error;
//     });
// }

async function requestAccessToken(oauthGrant) {
  try 
  {
      var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      };
      const response = await axios({
          method: 'post',
          url: tokenUrl,
          data: oauthGrant,
          headers: headers
      });
      return await response;
   }
   catch (error) {
      console.log('Failed to execute' & tokenUrl + ' Found Error as :', error);
  }
}



async function authenticate() {
var urlval="https://auth.atlassian.com/login"
var data={
  state:"",
  client:"JnZngY1dNSdA6UzlgbuvplTodLff5G6F",
  protocol:"oauth2",
  audience:"api.atlassian.com",
  redirect_uri:"https://system.converse.ai/api/settings/oauth/oauth2callback",
  response_type:"code",
  scope:"read:jira-user write:jira-work read:jira-work"
}
var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};
  try 
  {
      const response = await axios({
          method: 'post',
          url: urlval,
          data: data,
          headers: headers
      });
      return await response;
  }
  catch (error) {
    console.log(`failed to authenticate`);
  }
  // return Axios.post(urlval , data)
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(error => {
  //     console.log(`failed to authenticate`);
  //     throw error;
  //   });
}

function getClientId(body) {

  if (body == null || body.payload == null) {
    return "";
  }

  var registrationData = body.payload.registrationData;

  var clientId = null;
  if (registrationData != null && registrationData.app != null) {
    clientId = registrationData.app.client_id
  }

  return clientId;
}

module.exports = {
  requestAccessToken: requestAccessToken,
  getClientId: getClientId,
  authenticate:authenticate
}
