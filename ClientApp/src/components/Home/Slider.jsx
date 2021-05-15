import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Button, IconButton, Paper, Typography } from "@material-ui/core";
import ArrowRight from "../../images/icons/ArrowIcon";
import { Fade, Zoom } from "react-reveal";
import { useLanguage } from "../../hooks/useLanguage";
SwiperCore.use([Pagination, EffectCoverflow, Navigation]);
const Slider = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const component = language.data.home.slider;
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
      <SwiperSlide className="px-2" key={i}>
        <Paper className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-7">
              <div className="homeTanent-additionWrapper">
                <div className="hero-additionBlock tanent-icon">
                  <img
                    alt="branding"
                    width="36px"
                    src="https://emazad.sa/assets/branding/images/icons/Thiqah.svg"
                  />
                  <div className="tanent-name">
                    <p className="on-top">خاصة</p>
                  </div>
                </div>
              </div>
              <div className="hero-wrapper">
                <div className="hero-cover">
                  <img alt="hero-cover" src={el} />
                </div>
                <div className="hero-additionWrapper">
                  <div className="hero-additionBlock">
                    <span className="text mb-3">{component.share_token}</span>
                    <span className="value">210,000</span>
                    <span className="symbol">{component.currency}</span>
                  </div>
                  <div className="hero-additionBlock">
                    <span className="text ">{component.from}</span>
                    <span className="mb-md-1 value">26/4/2021</span>
                    <span className="text">{component.to}</span>
                    <span className="value">10/6/2021</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-12 col-sm-12 col-md-5 ${language.direction}`}>
              <div className="hero-body">
                <h5 className="hero-info">{component.info}</h5>
                <h3 className="hero-title">{component.title}</h3>
                <p className="hero-desc text-truncate">{component.category}</p>
                <div className="counter">
                  <span className="counter-icon">
                    <svg className="icon">
                      <path
                        fill="#282b2b"
                        d="M19.994 8.612l1.841-1.841c0.624-0.624 1.638-0.622 2.261-0l1.134 1.134c0.624 0.624 0.629 1.632-0 2.26l-1.841 1.841c1.396 2.050 2.212 4.527 2.212 7.194 0 7.069-5.731 12.8-12.8 12.8s-12.8-5.731-12.8-12.8c0-6.527 4.886-11.914 11.2-12.701v-1.699h-1.593c-0.887 0-1.607-0.719-1.607-1.598v-1.603c0-0.883 0.722-1.598 1.607-1.598h6.386c0.887 0 1.607 0.719 1.607 1.598v1.603c0 0.883-0.722 1.598-1.607 1.598h-1.593v1.699c2.056 0.256 3.961 1 5.594 2.113zM12.8 28.8c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6z"
                      />
                      <path
                        style={{ fill: "var(--color-primary)" }}
                        d="M12 12.807c0-0.887 0.71-1.607 1.6-1.607 0.884 0 1.6 0.722 1.6 1.607v6.386c0 0.887-0.71 1.607-1.6 1.607-0.884 0-1.6-0.722-1.6-1.607v-6.386z"
                      />
                    </svg>
                  </span>
                  <div className="counter-item">
                    <span className="counter--value">
                      <div className="count-down" style={{ display: "inline" }}>
                        <span className="hand hand-d">
                          <span className="digital digital-2 ">2</span>
                          <span className="digital digital-8 ">8</span>
                        </span>
                      </div>
                    </span>
                    <div className="counter--label"> {component.days}</div>
                  </div>
                  <div className="counter-item">
                    <span className="counter--value">
                      <div className="count-down" style={{ display: "inline" }}>
                        <span className="hand hand-h">
                          <span className="digital digital-1 ">1</span>
                          <span className="digital digital-0 ">0</span>
                        </span>
                      </div>
                    </span>
                    <div className="counter--label"> {component.hours}</div>
                  </div>
                  <div className="counter-item">
                    <span className="counter--value">
                      <div className="count-down" style={{ display: "inline" }}>
                        <span className="hand hand-m">
                          <span className="digital digital-1 ">1</span>
                          <span className="digital digital-9 ">9</span>
                        </span>
                      </div>
                    </span>
                    <strong className="counter--label">
                      {" "}
                      {component.minutes}
                    </strong>
                  </div>
                  <div className="counter-item">
                    <div className="counter--value">
                      <div className="count-down" style={{ display: "inline" }}>
                        <span className="hand hand-s">
                          <span className="digital digital-5 ">5</span>
                          <span className="digital digital-4 ">4</span>
                        </span>
                      </div>
                    </div>
                    <strong className="counter--label">
                      {" "}
                      {component.seconds}
                    </strong>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className="rounded-pill mt-2"
                >
                  {component.button}
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </SwiperSlide>
    ));
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: `100vh` }}
    >
      <div className="pt-5">
        <div className="container hero">
          <Swiper
            style={{ overflowY: `visible` }}
            onSlideChange={(a) => setIndex(a.realIndex)}
            initialSlide={0}
            className="unaffected pb-5"
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
