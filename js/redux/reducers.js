import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import  conductDataReducer  from './modules/conduct';

export default combineReducers({
    navigation: NavigationReducer,
    conductData: conductDataReducer
});