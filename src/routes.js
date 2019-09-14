import React from "react";

import { Route } from "react-router-dom";

import Home from "Pages/Home/Containers/Page";
import About from "Pages/About/Containers/Page";

const router = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
);

export default router;
