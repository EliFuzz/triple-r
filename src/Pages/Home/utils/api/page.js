import { getRequest } from "common/request";

export const fetchPage = () => getRequest("/counter");
