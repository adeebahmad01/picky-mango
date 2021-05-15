import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Bounce } from "react-reveal";
import ArrowRight from "../../images/icons/ArrowIcon";
import AdCard from "../utils/AdCard";

const Ads = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between container">
          <Typography variant="h2" className="my-4">
            Latest Ads
          </Typography>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              endIcon={<ArrowRight width={16} />}
              className="rounded-pill w-auto px-3 unaffected"
              color="primary"
            >
              See All
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
