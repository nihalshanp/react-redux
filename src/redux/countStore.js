import { createStore } from "redux";
import countReducer from "./count/countReducer";

const countStore = createStore(countReducer);

export default countStore;
