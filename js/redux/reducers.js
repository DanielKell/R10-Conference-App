import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({
    navigation: NavigationReducer,
}); //NEED TO IMPORT THIS INTO STORE