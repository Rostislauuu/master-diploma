import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./Routes/PrivateRoute";

import Login from "./Login/Login";
import Lessons from "./Lessons/Lessons";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/auth" component={Login} />

        {/* Make here one component with multiple routes*/}
        <PrivateRoute path="/lessons" component={Lessons} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
