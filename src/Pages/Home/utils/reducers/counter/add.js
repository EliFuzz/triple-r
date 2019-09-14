import {
  ADD_REQUEST,
  ADD_SUCCESS,
  ADD_FAILURE
} from "Pages/Home/utils/actionTypes/add";

const INITIAL_STATE = {
  amount: 0,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        amount: state.amount + action.payload.amount,
        isLoading: false
      };
    case ADD_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
