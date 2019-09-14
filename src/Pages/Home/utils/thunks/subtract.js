import { fetchPage } from "Pages/Home/utils/api/page";
import { failure, request, success } from "Pages/Home/utils/actions/subtract";

export const subtractAmount = amount => async dispatch => {
  try {
    dispatch(request());
    await fetchPage();
    dispatch(success(amount));
  } catch (e) {
    dispatch(failure());
  }
};
