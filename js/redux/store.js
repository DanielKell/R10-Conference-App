import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
}); 

const store = createStoreWithNavigation(
  reducers,
  {}, 
  composeEnhancers(
    applyMiddleware(thunk)
  ) 
);
export default store;