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

const loadAuth2WithProps = async function (props) {
    return new Promise(resolve => {
        gapi.load('auth2', () => {
            resolve(gapi.auth2.init(props));
        });
    });
}

export { gapi, gapiComplete, loadAuth2, loadAuth2WithProps };
