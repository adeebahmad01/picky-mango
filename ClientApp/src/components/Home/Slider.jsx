import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Parallax,
  EffectFade,
  Navigation,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { Button, IconButton, Typography } from "@material-ui/core";
import ArrowRight from "../../images/icons/ArrowIcon";
import { Fade, Zoom } from "react-reveal";
SwiperCore.use([Parallax, Pagination, EffectFade, Navigation]);
const Slider = () => {
  const [index, setIndex] = useState(0);
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
  const showSlides = () =>
    images.map((el, i) => (
      <SwiperSlide key={i} className="blog-slider__item">
        <div className="row w-100">
          <div className="col-lg-5">
            <Zoom when={index === i}>
              <div className="blog-slider__img">
                <img src={el} alt={el} />
              </div>
            </Zoom>
          </div>
          <div className="col-lg-7">
            <Fade when={index === i} cascade top>
              <div className="blog-slider__content">
                <Typography
                  variant="h2"
                  className="blog-slider__code text_colored"
                >
                  Happening Now
                </Typography>
                <Typography variant="h1" className="blog-slider__title">
                  ثلاجة ناشونال الكترك
                </Typography>
                <div className="blog-slider__text mb-2">
                  <b>Ad Owned by:</b> Picky Mango
                </div>
                <div className="blog-slider__text mb-2">
                  <b>From Country:</b> Jordan
                </div>
                <div className="blog-slider__text">
                  <b>Current Price:</b> 225 د.ا.‏
                </div>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  className="blog-slider__button rounded-pill"
                >
                  READ MORE
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </SwiperSlide>
    ));
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
        <div className="container">
          <Swiper
            onSlideChange={(a) => setIndex(a.realIndex)}
            initialSlide={0}
            className="blog-slider overflow-visible unaffected"
            effect="fade"
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor
            loop
          >
            {showSlides()}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
