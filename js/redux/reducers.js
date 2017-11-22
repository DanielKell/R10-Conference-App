import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import conductDataReducer  from './modules/conduct';
import sessionsDataReducer from './modules/sessions';

export default combineReducers({
    navigation: NavigationReducer,
    conductData: conductDataReducer,
    sessionData: sessionsDataReducer
});