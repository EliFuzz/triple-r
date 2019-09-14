import React from "react";

const Home = ({ getCounter, add, subtract }) => (
  <div>
    <div>Home</div>
    <div>{getCounter}</div>
    <span onClick={() => subtract(1)}>-</span>
    <span onClick={() => add(1)}>+</span>
  </div>
);

export default Home;
