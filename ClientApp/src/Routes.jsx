import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PlaceAds from "./components/Place_Ads";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/terms" component={Terms} exact />
      <Route path="/privacy" component={Privacy} exact />
      <Route path="/place-ads" component={PlaceAds} exact />
    </Switch>
  );
};

export default Routes;
