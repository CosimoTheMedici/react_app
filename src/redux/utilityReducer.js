// redux/tenantReducer.js
import {
  FETCH_UTILITY_SUCCESS,
  FETCH_UTILITY_FAILURE
  } from './actionTypes'; // You'll create this later
  
  const initialState = {
    utilityData: [],
  };
  
  const utilityReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_UTILITY_SUCCESS:
        return {
          ...state,
          utilityData: action.payload,
        };
      case FETCH_UTILITY_FAILURE:
        return state; // You can handle failure case if needed
      default:
        return state;
    }
  };
  
  export default utilityReducer;
  