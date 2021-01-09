# gapi-script
[![Generic badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/) | [![Generic badge](https://img.shields.io/badge/version-1.1.0-red.svg)](https://shields.io/)
## 💡 Intro
npm package that loads gapi script and initialize some functions.

 - [React live example](https://google-gapi-login.herokuapp.com)
 - [React live example project](https://github.com/LucasAndrad/gapi-script-live-example)

Since there is no official package and not even an updated package to load the gapi functions for us, this package make this possible. You can either call `loadGapiInsideDOM` to load the gapi-script inside a `<script>` tag on your browser. Or use the static gapi value that was copied from [google api platform](https://apis.google.com/js/platform.js), pasted to this project and exported as `gapi`.

## 🚀 Usage
Add the package to your project:

```javascript
// npm
npm install --save gapi-script


// yarn
yarn add gapi-script
```

You can load gapi with two different approaches
1 - import `gapi` where you need it:
```javascript
import { gapi } from 'gapi-script';
```

2 - import `gapi` and called somewhere in your app:
```javascript
import { loadGapiInsideDOM } from 'gapi-script';
const gapi = await loadGapiInsideDOM();
```
**After gapi loaded using the 2 approach you can access it on `window.gapi` anywhere in your app**

Once you have gapi you can use it in other functions to make your life easier

If you need to use `gapi auth2` the package already has a function to initialize it:

```javascript
import { loadAuth2, loadAuth2WithProps, loadClientAuth2 } from 'gapi-script';

let auth2 = await loadAuth2(gapi, clientId, scopes);

// or if you need to use more props from gapi you can use this method:
let auth2 = await loadAuth2WithProps(gapi, { /* object with props from gapi */ });

// if you want to use the gapi client itself
let gapiClient = loadClientAuth2(gapi, clientId, scopes);
```

## 📦 Contribution
If you want to contribute just open an issue and send your PR with a good description about it.

**OBS**: the gapi code is copied from this link [google api platform](https://apis.google.com/js/platform.js), and can become outdated any time. I'll dedicate myself to keep it updated always, but if you see any error with gapi load, please open an issue to report about it
