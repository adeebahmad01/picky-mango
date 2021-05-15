import React, { useState } from "react";
import {
  Button,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../images/icons/close.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: `all 0.3s ease-in`,
  },
  icon: {
    position: `absolute`,
    right: 10,
    top: 10,
  },
}));

const Searchbar = () => {
  const [category, setCategory] = useState("");
  const [defaultLocation, setLocation] = useState("");
  const categories = [
    "ازياء",
    "الصحة",
    " رياضة",
    "موسيقى",
    "فنون",
    "التجميل",
    "خدمات",
    "العقارات",
    "الحديقة والمنزل",
    "الغذاء",
    "التعليم والتدريب",
    "سيارات",
    "الالكترونيات",
    "الحيوانات الأليفة",
  ];
  const location = [
    "Singapore",
    "سوريا",
    "ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᏍᎦᏚᎩ",
    "Hong Kong SAR",
    "Црна Гора",
    "Србија",
    "Ecuador",
    "Mali",
    "Jamaica",
    "Indonesia",
    "México",
    "Ελλάδα",
    "မြန်မာ",
    "Honduras",
    "Luxemburg",
    "Otobbia",
    "Schweiz",
    "ไทย",
    "Lietuva",
    "ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།",
    "საქართველო",
    "Cameroun",
    "World",
    "Perú",
    "المملكة العربية السعودية",
    "تونس",
    "Slovenija",
    "Bolivia",
    "اليمن",
    "Nigeria",
    "Caribbean",
    "Malta",
    "Senegaal",
    "Монгол",
    "Haïti",
    "Canada",
    "Азәрбајҹан",
    "الجزائر",
    "বাংলাদেশ",
    "Shqipëri",
    "Portugal",
    "New Zealand",
    "الإمارات العربية المتحدة",
    "República Dominicana",
    "Australia",
    "Hrvatska",
    "Latinoamérica",
    "Česko",
    "Polska",
    "Congo, République démocratique du",
    "Republica Moldova",
    "El Salvador",
    "ދިވެހި ރާއްޖެ",
    "Italia",
    "Frañs",
    "Ísland",
    "Monaco",
    "Ўзбекистон",
    "Puerto Rico",
    "Ireland",
    "Botswana",
    "Brasil",
    "Liechtenstein",
    "ليبيا",
    "Deutschland",
    "Kenya",
    "Тоҷикистон",
    "Malaysia",
    "La Réunion",
    "Panamá",
    "Österreich",
    "افغانستان",
    "Suomi",
    "Chile",
    "ኤርትራ",
    "Argentina",
    "Қазақстан",
    "नेपाल",
    "Ruoŧŧa",
    "Colombia",
    "لبنان",
    "Türkiye",
    "日本",
    "Kalaallit Nunaat",
    "مصر",
    "Eesti",
    "قطر",
    "Philippines",
    "Việt Nam",
    "Босна и Херцеговина",
    "កម្ពុជា",
    "الكويت",
    "Espanya",
    "Belgique",
    "Северна Македонија",
    "Guatemala",
    "Кыргызстан",
    "Slovensko",
    "Nicaragua",
    "ایران",
    "Uruguay",
    "台灣",
    "پاکستان",
    "Costa Rica",
    "România",
    "ລາວ",
    "Україна",
    "Cuba",
    "العراق",
    "Paraguay",
    "Рәсәй",
    "Zimbabwe",
    "Norge",
    "Føroyar",
    "Brunei",
    "Côte d’Ivoire",
    "ישראל",
    "Venezuela",
    "Magyarország",
    "대한민국",
    "Suid-Afrika",
    "Soomaaliya",
    "澳門特別行政區",
    "عمان",
    "ভাৰত",
    "ශ්‍රී ලංකාව",
    "Latvija",
    "البحرين",
    "Nederlân",
    "Danmark",
    "الأردن",
    "Bosna i Hercegovina",
    "Türkmenistan",
    "Y Deyrnas Unedig",
    "България",
    "U Rwanda",
    "Belize",
    "Trinidad &amp; Tobago",
    "Беларусь",
    "Հայաստան",
    "འབྲུག",
    "المملكة المغربية",
  ];
  const classes = useStyles();
  return (
    <Paper
      className={`search_bar border-bottom-0 row bg-white w-100 ${classes.root}`}
    >
      <div className="col-lg px-0">
        <TextField
          InputProps={{ className: `bg-white` }}
          fullWidth
          label="Search Keyword"
          variant="filled"
          type="search"
        />
      </div>
      <div className="col-lg px-0">
        <Autocomplete
          id="categories"
          options={categories}
          onInputChange={(e, value) => setCategory(value)}
          getOptionLabel={(option) => option}
          style={{ width: `100%` }}
          renderInput={(params) => {
            params.InputProps.className =
              params.InputProps.className + " unaffected bg-white";
            return (
              <TextField
                {...params}
                onChange={(e) => setLocation(e.target.value)}
                value={category}
                label="Categories"
                variant="filled"
                className="unaffected rounded-0"
              />
            );
          }}
        />
      </div>
      <div className="col-lg px-0">
        <Autocomplete
          id="location"
          options={location}
          onInputChange={(e, value) => setLocation(value)}
          getOptionLabel={(option) => option}
          style={{ width: `100%` }}
          renderInput={(params) => {
            params.InputProps.className =
              params.InputProps.className + " unaffected bg-white";
            return (
              <TextField
                {...params}
                onChange={(e) => setLocation(e.target.value)}
                value={defaultLocation}
                label="Location"
                variant="filled"
                className="unaffected english"
              />
            );
          }}
        />
      </div>
      <div className="col-lg-3 px-0">
        <Button
          component={Link}
          to={{
            pathname: "/results",
          }}
          variant="contained"
          color="primary"
          fullWidth
          className="rounded-0 shadow-none text-white h-100"
        >
          Search
        </Button>
      </div>
    </Paper>
  );
};

export default Searchbar;
