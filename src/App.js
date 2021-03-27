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
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <UserContainer/> */}
        <h2>-----------------</h2>
        <PostContainer/>
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
