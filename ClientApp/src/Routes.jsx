import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contact" component={Contact} exact />
    </Switch>
  );
};

export default Routes;
