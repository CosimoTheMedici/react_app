// redux/tenantReducer.js
import {
    FETCH_PROPERTIES_SUCCESS,
    FETCH_PROPERTIES_FAILURE,
  } from './actionTypes'; // You'll create this later
  
  const initialState = {
    propertiesData: [],
  };
  
  const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROPERTIES_SUCCESS:
        return {
          ...state,
          propertiesData: action.payload,
        };
      case FETCH_PROPERTIES_FAILURE:
        return state; // You can handle failure case if needed
      default:
        return state;
    }
  };
  
  export default propertiesReducer;
  