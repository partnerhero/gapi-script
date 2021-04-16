/// <reference types="gapi.auth2"/>

export const loadAuth2: (
  gapiScript: typeof gapi,
  clientId: string,
  scopes: string
) => Promise<gapi.auth2.GoogleAuth>;

export const loadAuth2WithProps: (
  gapiScript: typeof gapi,
  props: gapi.auth2.ClientConfig
) => Promise<gapi.auth2.GoogleAuth>;

export const loadClientAuth2: (
  gapiScript: typeof gapi,
  clientId: string,
  scopes: string
) => Promise<gapi.auth2.GoogleAuth>;

export const loadGapiInsideDOM: () => Promise<typeof gapi>;

export const gapiComplete: any;
declare const g: typeof gapi;
export { g as gapi };
