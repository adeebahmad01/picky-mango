import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import { useLanguage } from "./hooks/useLanguage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import "./styles/defaults.css";
import "./styles/rtl.css";
import "./styles/ltr.css";
import "./styles/home.css";
import "./styles/contact.css";
import Footer from "./components/Layout/Footer";
import { StickyShareButtons } from "sharethis-reactjs";
import Login from "./components/Login";
import { PopupProvider } from "./hooks/usePopup";
import SignUp from "./components/Signup";

const colors = {
  primary: "#f39122",
  "primary-light": "#f3912255",
  "primary-dark": "#dd841f",
  secondary: "#8ec045",
  "secondary-light": "#8ec04555",
  "secondary-dark": "#668a30",
};

const App = () => {
  const { language } = useLanguage();
  const theme = createMuiTheme({
    direction: language.direction,
    palette: {
      primary: {
        main: colors.primary,
        light: colors["primary-light"],
        dark: colors["primary-dark"],
        contrastText: `#fff`,
      },
      secondary: {
        contrastText: `#fff`,
        main: colors.secondary,
        light: colors["secondary-light"],
        dark: colors["secondary-dark"],
      },
    },
    typography: {
      fontFamily: `"Poppins","Droid Arabic Kufi", sans-serif`,
      fontWeightBold: 700,
      fontWeightLight: 300,
      fontWeightMedium: 600,
      fontWeightRegular: 400,
      h1: {
        fontSize: `3rem`,
      },
      h2: {
        fontSize: `2.5rem`,
      },
      h3: {
        fontSize: `2rem`,
      },
      h4: {
        fontSize: `1.75rem`,
      },
      h5: {
        fontSize: `1.5rem`,
      },
      h6: {
        fontSize: `1.25rem`,
      },
    },
  });
  return (
    <PopupProvider>
      <ThemeProvider theme={theme}>
        <StickyShareButtons
          config={{
            alignment: "left", // alignment of buttons (left, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            hide_desktop: false, // hide buttons on desktop (true, false)
            labels: "counts", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            min_count: 0, // hide react counts less than min_count (INTEGER)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "linkedin",
              "facebook",
              "twitter",
              "pinterest",
              "email",
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: true, // show/hide the total share count (true, false)
            show_mobile: true, // show/hide the buttons on mobile (true, false)
            show_toggle: true, // show/hide the toggle buttons (true, false)
            size: 48, // the size of each button (INTEGER)
            top: 160, // offset in pixels from the top of the page

            // OPTIONAL PARAMETERS
            url: "https://www.sharethis.com", // (defaults to current url)
            image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
            description: "custom text", // (defaults to og:description or twitter:description)
            title: "custom title", // (defaults to og:title or twitter:title)
            message: "custom email text", // (only for email sharing)
            subject: "custom email subject", // (only for email sharing)
            username: "custom twitter handle", // (only for twitter sharing)
          }}
        />
        <BrowserRouter>
          <Header />
          <Login />
          <SignUp />
          <Routes />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </PopupProvider>
  );
};

export default App;
