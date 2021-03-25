import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import countStore from "./redux/countStore";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
      <Provider store={countStore}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
