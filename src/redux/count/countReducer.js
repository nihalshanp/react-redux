import { INCREMENT_COUNT, DECREAMENT_COUNT, RESET } from "./countType";

const initialCountState = {
  count: 0,
};

const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREAMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return initialCountState;
    default:
      return state;
  }
};

export default countReducer;
