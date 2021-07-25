import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
