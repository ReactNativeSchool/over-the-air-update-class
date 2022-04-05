import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';

import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['[react-native-gesture-handler]']);

const CodePushifiedApp = codePush(App);

AppRegistry.registerComponent(appName, () => CodePushifiedApp);
