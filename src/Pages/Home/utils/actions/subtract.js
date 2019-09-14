import {
  SUBTRACT_REQUEST,
  SUBTRACT_SUCCESS,
  SUBTRACT_FAILURE
} from "Pages/Home/utils/actionTypes/subtract";

export const request = () => ({
  type: SUBTRACT_REQUEST
});

export const success = amount => ({
  type: SUBTRACT_SUCCESS,
  payload: { amount }
});

export const failure = () => ({
  type: SUBTRACT_FAILURE
});
