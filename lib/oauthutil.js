const Axios   = require('axios');

var tokenUrl = "https://auth.atlassian.com/oauth/token";
async function requestAccessToken(oauthGrant) {
  return Axios.post(tokenUrl , oauthGrant)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log(`Error requesting access token for grant type ${oauthGrant.grant_type}`);
      throw error;
    });
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
  getClientId: getClientId
}
