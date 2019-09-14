import {
  SUBTRACT_REQUEST,
  SUBTRACT_SUCCESS,
  SUBTRACT_FAILURE
} from "Pages/Home/utils/actionTypes/subtract";

const INITIAL_STATE = {
  amount: 0,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBTRACT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SUBTRACT_SUCCESS:
      return {
        ...state,
        amount: state.amount - action.payload.amount,
        isLoading: false
      };
    case SUBTRACT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
