import { gapi, gapiComplete } from './gapiScript';

const loadAuth2 = async function (clientId, scopes) {
    return new Promise(resolve => {
        gapi.load('auth2', () => {
            resolve(gapi.auth2.init({
                client_id: clientId,
                scope: scopes
            }));
        });
    });
}

export { gapi, gapiComplete, loadAuth2 };
