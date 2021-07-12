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
          'Content-Type': 'application/json'
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

async function requestCloudid(accesstoken) {
  try 
  {
      var headers = {
          'Accept': 'application/json',
          'Authorization': "Bearer"+ access_token
      };
      const cloudid = await axios({
          method: 'get',
          url: 'https://api.atlassian.com/oauth/token/accessible-resources',
          headers: headers
      });
      return await cloudid;
   }
   catch (error) {
      console.log('Failed to get cloudid' + ' Found Error as :', error);
  }
}


async function authenticate() {
  var urlval="https://auth.atlassian.com/authorize"
  var data={
  //protocol:"oauth2",
  audience:"api.atlassian.com",
  client:"JnZngY1dNSdA6UzlgbuvplTodLff5G6F",
  scope:"read:jira-user write:jira-work read:jira-work manage:jira-data-provider",
  redirect_uri:"https://cloudwave.bridge.smartsheet.com/",
  state:"",
  response_type:"code",
  prompt:"consent"
  };
  var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  };
  try 
  {
      const response = await axios({
          method: 'get',
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
  authenticate:authenticate,
  requestCloudid:requestCloudid
}
