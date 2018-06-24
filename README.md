# WI-FI Analyzer

Simple app showing usage of React and new React Context API.

### Quick start

1. Make sure that you have Node v8 or above installed.
2. Clone repo with this command `git clone https://github.com/peter711/Wi-Fi-Analyzer-React-App.git`
3. Move to folder which you have cloned `cd WiFi-Analyzer-React-App`
4. Run`npm install` in order to install dependecies
5. When you have installed all dependecies run `npm start`. 
6. Go to `http://localhost:8080`. Webpack-dev-server will serve application

### Building package

You can build package in two modes: development and production. Build bases on standard webpack --mode option during building the package.

To build package in development mode use comand `npm run build:dev`.

To build package in production mode use command `npm run build:prod`.

Under `/dist` folder there will be your package which can be served by your preffered web server. 

### Testing

In repo tests are provided with usage of Jest and Enzyme. Most of the components are tested by their own unit tests and they have matching snapshots. 

To run test run command `npm run test`.

When you updated some components and the specific snapshot became obsolete, in order to update run command `npm run test -- -u`. This will force Jest to update snapshots of components 

To run test in watch mode run command `npm run test:watch`

