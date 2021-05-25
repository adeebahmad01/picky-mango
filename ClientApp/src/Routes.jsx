import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const components = [
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
  { name: "Home", path: "/" },
  { name: "PlaceAds", path: "/place-ads" },
  { name: "PlaceAuctions", path: "/place-auctions" },
  { name: "Details", path: "/ad-details/:id" },
  { name: "Details", path: "/auction-details/:id", props: { timer: true } },
  { name: "Contact", path: "/contact" },
  { name: "Faq", path: "/faq" },
  { name: "View_Ads_Auctions", path: "/view_ads_auctions" },
];

const Routes = () => {
  return (
    <Route
      render={({ location }) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return (
          <div style={{ position: "relative" }}>
            <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                {components.map((el) => {
                  const Component = require(`./components/${el.name}`).default;
                  return (
                    <Route path={el.path} exact>
                      <Component {...el.props} />
                    </Route>
                  );
                })}
              </Switch>
            </AnimatePresence>
          </div>
        );
      }}
    />
  );
};

export default Routes;
