/** @format */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

YellowBox.ignoreWarnings(["Remote debugger"])

AppRegistry.registerComponent(appName, () => App);
