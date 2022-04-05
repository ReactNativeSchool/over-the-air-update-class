import {AppRegistry, LogBox, Platform} from 'react-native';
import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';

import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['[react-native-gesture-handler]']);

const codePushKeys = Platform.select({
  ios: {
    STAGING: '_0hL5bn-x0H9VAsAorYFJr4fhqNWQZK-J0Ogu',
    PRODUCTION: 'UPfjI8kjCtrXI-DCTVy3Wo-yS4mK1jfn6h0oW',
  },
  android: {
    STAGING: 'kA-jV6G-UhSp9z2b1SNbTvLdiEOoRSlih2WpE',
    PRODUCTION: 'kA-jV6G-UhSp9z2b1SNbTvLdiEOoRSlih2WpE',
  },
});

const isBetaUser = true;

export const codePushDeploymentKey = isBetaUser
  ? codePushKeys.STAGING
  : codePushKeys.PRODUCTION;

const CodePushifiedApp = codePush({
  deploymentKey: codePushDeploymentKey,
  checkFrequency: codePush.CheckFrequency.MANUAL,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
})(App);

AppRegistry.registerComponent(appName, () => CodePushifiedApp);
