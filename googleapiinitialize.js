// Client ID and API key from the Developer Console
var CLIENT_ID = '729667979950-8u5r6kkclsj5cisldvfbj51gfh07mnjn.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCLCaBMOprD4ChtjoMjBRUYnacuvY4HcXc';

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'AIzaSyCLCaBMOprD4ChtjoMjBRUYnacuvY4HcXc',
      'clientId': '729667979950-8u5r6kkclsj5cisldvfbj51gfh07mnjn.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}