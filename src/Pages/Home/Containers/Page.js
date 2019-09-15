import { connect } from "react-redux";

import Page from "Pages/Home/Components/Page";

import { getCounter } from "Pages/Home/utils/selectors/counter";

import { addAmount } from "Pages/Home/utils/thunks/add";
import { subtractAmount } from "Pages/Home/utils/thunks/subtract";

const mapStateToProps = (state, props) => ({
  counter: getCounter(state, props)
});

const mapDispatchToProps = dispatch => ({
  add: amount => dispatch(addAmount(amount)),
  subtract: amount => dispatch(subtractAmount(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
