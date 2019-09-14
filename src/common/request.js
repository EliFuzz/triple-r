const URL = process.env.NODE_ENV !== "production" ? "/prod" : "/dev";
const doRequest = (method, path, body) => {};

export const getRequest = path => doRequest("GET", path);
export const postRequest = (path, body) => doRequest("POST", path, body);
