import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
  return (
    <div>
      <h1>Number of Ice Creams - {numOfIceCreams} </h1>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
