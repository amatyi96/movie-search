// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {EnvironmentInterface} from "./environment.interface";

export const environment: EnvironmentInterface = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: '1c5abaaeaa13c66b570ad3042a0d51f4',
  imgApiUrl: 'https://image.tmdb.org/t/p',
  language: 'en-US'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
