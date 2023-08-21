// redux/tenantReducer.js
import {
    FETCH_TENANTS_SUCCESS,
    FETCH_TENANTS_FAILURE,
  } from './actionTypes'; // You'll create this later
  
  const initialState = {
    tenantsData: [],
  };
  
  const tenantReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TENANTS_SUCCESS:
        return {
          ...state,
          tenantsData: action.payload,
        };
      case FETCH_TENANTS_FAILURE:
        return state; // You can handle failure case if needed
      default:
        return state;
    }
  };
  
  export default tenantReducer;
  