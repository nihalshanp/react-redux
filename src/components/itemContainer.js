import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      <h2>items - {item} </h2>
      <button onClick={buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemStete = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCreams;
  return {
    item: itemStete,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFountion = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFountion,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
