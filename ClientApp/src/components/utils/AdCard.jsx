import { Avatar, Button, CardActionArea, Paper } from "@material-ui/core";
import React from "react";
import { Bounce } from "react-reveal";

const AdCard = () => {
  return (
    <Bounce top>
      <Paper
        component={CardActionArea}
        className="profile box position-relative p-3 d-inline-block profile-long"
      >
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
            <div className="row mb-3">
              <div className="col-lg-6">
                <p className="profile__stats__title">Category</p>
                <p className="profile__stats__title">Country</p>
                <p className="profile__stats__title">Owned By</p>
              </div>
              <div className="col-lg-6">
                <p className="profile__stats__title">TEST</p>
                <p className="profile__stats__title">TEST</p>
                <p className="profile__stats__title text_colored">
                  Picky Mango
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-center align-items-center">
                <Avatar
                  alt="SELLER"
                  src="https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/8b3346dc-7b9e-465c-91c6-f45feb238be4/8f3be4f4-0a94-47e0-ac95-909f2ce1edec.jpeg"
                />
                <div className="mx-2">SELLER NAME</div>
              </div>
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

export default AdCard;
