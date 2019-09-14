import {
  ADD_REQUEST,
  ADD_SUCCESS,
  ADD_FAILURE
} from "Pages/Home/utils/actionTypes/add";

export const request = () => ({
  type: ADD_REQUEST
});

export const success = amount => ({
  type: ADD_SUCCESS,
  payload: { amount }
});

export const failure = () => ({
  type: ADD_FAILURE
});
