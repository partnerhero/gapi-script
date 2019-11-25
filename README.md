# gapi-script
npm package that loads gapi script and initialize some functions.

 - [React live example](https://google-gapi-login.herokuapp.com)
 - [React live example project](https://github.com/LucasAndrad/gapi-script-live-example)

Since there is no official package and not even an updated package the loads the gapi functions for us, what this package does is: get the js code from: [google api platform](https://apis.google.com/js/platform.js), added it to a file and then export that as module called `gapi`.

According to google docs, to add gapi into your web project, you have to add a script tag to load everything ([see more here](https://developers.google.com/identity/sign-in/web/sign-in)). But this approach will not work in some cases, sample: with react when you need to use `gapi` at `src/index.js`.

## Usage
Add the package to your project:

```javascript
// npm
npm install --save gapi-script


// yarn
yarn add gapi-script
```

Then just import `gapi` where you need it:
```javascript
import { gapi } from 'gapi-script';
```

If you need to use `gapi auth2` the package already has a function to initialize it:

```javascript
import { loadAuth2, loadAuth2WithProps } from 'gapi-script';

let auth2 = await loadAuth2(clientId, scopes);

// or if you need to use more props from gapi you can use this method:

let auth2 = await loadAuth2WithProps({ /* object with props from gapi */ });
```

## Contribution
If you want to contribute just open an issue and send your PR with a good description about it.

**OBS**: the gapi code is copied from this link [google api platform](https://apis.google.com/js/platform.js), and can become outdated any time. I'll dedicate myself to keep it updated always, but if you see any error with gapi load, please open an issue to report about it
