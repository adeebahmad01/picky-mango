import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Bounce } from "react-reveal";
import ArrowRight from "../../images/icons/ArrowIcon";
const AdCard = () => {
  return (
    <Bounce top>
      <Paper className="profile profile-long">
        <div className="row">
          <div className="col-lg-4 px-0">
            <div className="profile__image">
              <img
                src="https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/8b3346dc-7b9e-465c-91c6-f45feb238be4/8f3be4f4-0a94-47e0-ac95-909f2ce1edec.jpeg"
                alt="Seller"
                className="drop_shadow"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row w-100">
              <div className="col-lg-12">
                <div className="profile__info">
                  <h5>Nano protection adhesive</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="profile__stats">
                  <p className="profile__stats__title">Category</p>
                  <h5 className="profile__stats__info">TEST</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="profile__stats">
                  <p className="profile__stats__title">Country</p>
                  <h5 className="profile__stats__info">ABC</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="profile__stats">
                  <p className="profile__stats__title">Owned By</p>
                  <h5 className="profile__stats__info text_colored">
                    PICKY MANGO
                  </h5>
                </div>
              </div>
            </div>
            <div className="profile__cta">
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </Bounce>
  );
};

const Ads = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between container">
          <Typography variant="h2" className="my-4">
            Latest Ads
          </Typography>
          <Button
            endIcon={<ArrowRight width={16} />}
            className="rounded-pill w-auto px-3 unaffected"
            color="primary"
          >
            See All
          </Button>
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
