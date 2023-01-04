import React from "react";
import { Route, Switch } from "react-router-dom";
import Components from "./Components";



function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <Components />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
