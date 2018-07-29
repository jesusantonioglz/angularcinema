// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// CONEXION A LA BBDD FIREBASE

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCwkdI43ChqwgvBUDEemGizmgXZu76Klqk",
    authDomain: "angularcinema.firebaseapp.com",
    databaseURL: "https://angularcinema.firebaseio.com",
    projectId: "angularcinema",
    storageBucket: "angularcinema.appspot.com",
    messagingSenderId: "1086702467821"
  }
};



/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
