import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import conductDataReducer  from './modules/conduct';
import sessionsDataReducer from './modules/sessions';
import speakersDataReducer from './modules/speakers';

export default combineReducers({
    navigation: NavigationReducer,
    conductData: conductDataReducer,
    sessionData: sessionsDataReducer,
    speakerData: speakersDataReducer
});