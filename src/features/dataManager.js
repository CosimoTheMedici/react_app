
import { createStore } from 'redux';

// Define the initial state
const initialState = {
  agentsData: [],
};

// Define a reducer function to handle state updates
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGENTS_DATA':
      return { ...state, agentsData: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;