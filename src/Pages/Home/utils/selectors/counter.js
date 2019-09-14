import { pageIndex } from "Pages/Home/settings";

export const getCounter = (state, _) => state[pageIndex].counter.amount;
