import { reduceReducers } from "common/reduceReducers";

import add from "Pages/Home/utils/reducers/counter/add";
import subtract from "Pages/Home/utils/reducers/counter/subtract";

export default reduceReducers(add, subtract);
