import React from "react";
import {connect} from 'react-redux'
import { increamentCount, decreamentCount, reset } from "../redux";

const Counter = ({ count, increamentCount, decreamentCount, reset }) => {
  return (
    <div>
      <h1>Count - {count} </h1>
      <button onClick={increamentCount}>Increment</button>
      <button onClick={decreamentCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increamentCount: () => dispatch(increamentCount()),
    decreamentCount: () => dispatch(decreamentCount()),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
