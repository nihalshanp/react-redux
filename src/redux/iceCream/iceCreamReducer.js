import { BUY_ICECREAME } from "./iceCreamType";

const intialState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICECREAME:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
