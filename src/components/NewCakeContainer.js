import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = ({ numOfCake, buyCake }) => {
  const [number, setnumber] = useState(1);
  return (
    <div>
      <h1>Number of Cakes - {numOfCake} </h1>
      <input type="text" value={number} onChange={e => setnumber(e.target.value)} />
      <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
