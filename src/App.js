import React from "react";
import { Route, Switch } from "react-router-dom";
import Components from "./Components";
import './styling/tailwind.css';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Components />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
