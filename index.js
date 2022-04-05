import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['[react-native-gesture-handler]']);

AppRegistry.registerComponent(appName, () => App);
