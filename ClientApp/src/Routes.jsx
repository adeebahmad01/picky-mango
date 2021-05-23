import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PlaceAds from "./components/Place_Ads";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import View_Ads_Auctions from "./components/View_Ads_Auctions";
import Details from "./components/Details";
import { AnimatePresence } from "framer-motion";
const Routes = () => {
  return (
    <Route
      render={({ location }) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return (
          <div style={{ position: "relative" }}>
            <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} exact />
                <Route
                  path="/view_ads_auctions"
                  component={View_Ads_Auctions}
                  exact
                />
                <Route path="/terms" component={Terms} exact />
                <Route path="/privacy" component={Privacy} exact />
                <Route path="/place-ads" component={PlaceAds} exact />
                <Route path="/ad-details/:id" exact>
                  <Details />
                </Route>
                <Route path="/auction-details/:id" exact>
                  <Details timer />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        );
      }}
    />
  );
};

export default Routes;
