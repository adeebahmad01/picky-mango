import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Parallax, EffectFlip } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Button, Fab, IconButton, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowRight from "../../images/icons/ArrowIcon";
SwiperCore.use([Parallax, Navigation]);
// Import Swiper styles
const Slider = () => {
  const images = [
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/8b3346dc-7b9e-465c-91c6-f45feb238be4/8f3be4f4-0a94-47e0-ac95-909f2ce1edec.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/fd3298b9-3eba-4c8d-9c8a-96d366af1b86/12066ada-cb5e-408b-8469-1feb82e8f3fc.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/2fd5466a-7acd-4364-8531-54339ac22861/d4cc0773-bf3b-4ed2-a0f5-98f3ad01428f.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/8bb26a40-9b7b-4fad-87f0-8937209abfba/bcf42130-a2a2-4fd2-85de-4dbaa0c0d161.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/e705db76-7e5d-47c6-9b8a-bd67643a98ad/a9977481-431b-415f-ab8b-50dd7fe9be4d.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/e5fac692-b0ae-47a1-9ae4-b93d8b6e5e84/2afa0178-200b-4469-8fa1-61a1bcc822e6.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/f69511d2-44fd-4ff1-bc3f-6d9fe9810346/d7d6dcb9-ab85-4947-a300-03c380a3bfe6.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/cf8cffe9-7a0e-4c45-baca-289cc5c652a6/b74e20f3-58f3-410b-8604-5bd6c7d881a2.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/1c1023be-921f-452b-a5c5-bae34e943502/f4a4f7a0-0f77-4a94-b38d-9fd9cf2ec849.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/09e66e87-ac9e-4e75-b78a-c0141e777a18/d1f63611-270b-4e8c-b889-931c617683aa.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/914e6c15-2117-4aa2-b26d-22de2fa9db22/88a21dcf-f038-42bc-b20a-47d4b028353b.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/3c6233a4-75cb-4390-8a32-d77b89ff4459/5febdbd0-e461-479e-bcdd-0a4ff10a8f96.jpeg",
  ];
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: `100vh` }}
    >
      <div>
        <div className="d-flex justify-content-between container">
          <Typography variant="h2">Latest Ads</Typography>
          <IconButton className="rounded-pill w-auto px-3 unaffected">
            {" "}
            <span>
              See All <ArrowRight width={20} />
            </span>{" "}
          </IconButton>
        </div>
        <Swiper
          className="container unaffected"
          navigation
          grabCursor
          loop
          parallax
        >
          {images.map((el) => (
            <SwiperSlide className="h-100 p-2">
              <Paper elevation={3}>
                <div className="row">
                  <div className="col-lg-6">
                    <Paper
                      component="img"
                      className="w-100 rounded"
                      src={el}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <Typography variant="h3" className="rtl my-4 pe-4">
                      خدمات تكيف وتبريد{" "}
                    </Typography>
                    <div className="row my-3">
                      <div className="col-6">
                        <Typography variant="h5" style={{ textAlign: `right` }}>
                          Owner:{" "}
                        </Typography>
                      </div>
                      <div className="col-6">
                        <Typography color="primary" variant="h5">
                          <b>Picky Mango</b>{" "}
                        </Typography>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-6">
                        <Typography variant="h5" style={{ textAlign: `right` }}>
                          Current Price:{" "}
                        </Typography>
                      </div>
                      <div className="col-6">
                        <Typography color="primary" variant="h5">
                          <b>15 د.ا.‏</b>{" "}
                        </Typography>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-6">
                        <Typography variant="h5" style={{ textAlign: `right` }}>
                          Country:{" "}
                        </Typography>
                      </div>
                      <div className="col-6">
                        <Typography color="primary" variant="h5">
                          <b>Jordan</b>{" "}
                        </Typography>
                      </div>
                    </div>
                    <div className="text-center">
                      <Button
                        color="primary"
                        className="text-white rounded-pill"
                        size="large"
                        component={Link}
                        to="/abc"
                        variant="contained"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
