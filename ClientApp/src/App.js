import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import LanguageProvider from "./hooks/useLanguage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import "./styles/defaults.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "./styles/rtl.css";
import "./styles/ltr.css";
import "./styles/home.css";
import Footer from "./components/Layout/Footer";

const colors = {
  primary: "#f39122",
  "primary-light": "#f3912255",
  "primary-dark": "#dd841f",
  secondary: "#8ec045",
  "secondary-light": "#8ec04555",
  "secondary-dark": "#668a30",
};

const App = () => {
  const theme = createMuiTheme({
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
      fontFamily: `"Poppins","hinted-RB", sans-serif`,
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
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
