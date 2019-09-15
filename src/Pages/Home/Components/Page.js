import React from "react";

const Home = ({ counter, add, subtract }) => (
  <div>
    <div>Home</div>
    <div>{counter}</div>
    <span onClick={() => subtract(1)}>-</span>
    <span onClick={() => add(1)}>+</span>
  </div>
);

export default Home;
