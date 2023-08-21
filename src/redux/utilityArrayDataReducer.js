// redux/tenantReducer.js
import {
  FETCH_UTILITY_SUCCESS,
  FETCH_UTILITY_FAILURE,
  FETCH_UTILITYARRAYDATA_SUCCESS,
  FETCH_UTILITYARRAYDATA_FAILURE,
  } from './actionTypes'; // You'll create this later
  
  const initialState = {
    utilityArrayData: [],
  };
  
  const utilityArrayDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_UTILITYARRAYDATA_SUCCESS:
        return {
          ...state,
          utilityArrayData: action.payload,
        };
      case FETCH_UTILITYARRAYDATA_FAILURE:
        return state; // You can handle failure case if needed
      default:
        return state;
    }
  };
  
  export default utilityArrayDataReducer;
  