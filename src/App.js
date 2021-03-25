import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <HookCakeContainer/>
      </Provider>
    </div>
  );
}

export default App;
