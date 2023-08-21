// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import tenantReducer from './tenantReducer'; // You'll create this later
import propertiesReducer from './propertiesReducer'; // You'll create this later
import utilityReducer from './utilityReducer';
import utilityArrayDataReducer from './utilityArrayDataReducer';

const rootReducer = combineReducers({
  tenant: tenantReducer,
  properties: propertiesReducer,
  utilityData: utilityReducer,
  utilityArray: utilityArrayDataReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
