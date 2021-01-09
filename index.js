import { gapi, gapiComplete } from './gapiScript';

/**
 * Function to load gapi auth2 from a gapi that you provied
 * Check full docs here: https://developers.google.com/identity/sign-in/web/reference#auth_setup
 * @param {Object} gapiScript gapi script object
 * @param {string} clientId Your google clientID string
 * @param {Array.<string[]>} scopes The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
 */
const loadAuth2 = async function (gapiScript, clientId, scopes) {
  return new Promise(resolve => {
    gapiScript.load('auth2', () => {
      resolve(gapiScript.auth2.init({
        client_id: clientId,
        scope: scopes
      }));
    });
  });
}

const loadAuth2WithProps = async function (props) {
  return new Promise(resolve => {
    gapi.load('auth2', () => {
      resolve(gapi.auth2.init(props));
    });
  });
}

const loadClientAuth2 = async function (clientId, scopes) {
  return new Promise(resolve => {
      gapi.load('client', () => {
          resolve(gapi.client.init({
              client_id: clientId,
              scope: scopes
          }));
      });
      gapi.load('auth2', () => {
          resolve(gapi.client.init({
              client_id: clientId,
              scope: scopes
          }));
      });
  });
}

/**
 * A very special function to load the gapi inside the DOM, directly.
 * So it'll load the real and most recent gapi-scrip from google and attach to DOM:
 * let gapi = loadGapiInsideDOM();
 * Now you can use it anywhere.
 */
const loadGapiInsideDOM = new Promise(resolve => {
  const element = document.getElementsByTagName('script')[0];
  const js = document.createElement('script');
  js.id = 'google-platform';
  js.src = '//apis.google.com/js/platform.js';
  js.async = true;
  js.defer = true;
  element.parentNode.insertBefore(js, element);
  js.onload = async () => {
    resolve(window.gapi);
  }
});

export {
  gapi,
  gapiComplete,
  loadAuth2,
  loadAuth2WithProps,
  loadClientAuth2,
  loadGapiInsideDOM,
};
