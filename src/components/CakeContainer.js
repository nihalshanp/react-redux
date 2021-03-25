import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = ({ numOfCake, buyCake }) => {
  return (
    <div>
      <h1>Number of Cakes - {numOfCake} </h1>
      <button onClick={buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
