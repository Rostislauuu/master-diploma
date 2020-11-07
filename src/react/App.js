import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import PrivateRoute from "./Routes/PrivateRoute";

import Login from "./Login/Login";
import Lessons from "./Lessons/Lessons";

import Header from "../shared/Header/Header";



const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/auth" component={Login}/>
                {/* Make here one component with multiple routes*/}
                <PrivateRoute path="/lessons" component={Lessons}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
