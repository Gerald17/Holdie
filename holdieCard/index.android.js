import { AppRegistry, BackAndroid } from 'react-native';

import App from './app/containers/App.js';

BackAndroid.addEventListener('hardwareBackPress', () => {
    try {
        const { routes } = this.context;
        return routes.pop;
    } catch (err) {
        BackAndroid.exitApp();
    }   
});

AppRegistry.registerComponent('holdieCard', () => App);
