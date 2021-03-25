import React, {useEffect} from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  useEffect(() => {
    console.log("redaring");
    
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
