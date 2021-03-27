import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/itemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer/>
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
