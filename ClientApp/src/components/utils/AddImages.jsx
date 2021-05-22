import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import React from "react";
import CustomInput from "./CustomInput";

const useStyles = makeStyles((theme) => ({
  errorButton: {
    backgroundColor: theme.palette.error.main,
    color: `#fff`,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const Delete = (props) => (
  <svg viewBox="-40 0 427 427.00131" {...props}>
    <path d="M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0M114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0" />
    <path d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0078.796 427H268a49.233 49.233 0 0035.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 00-11.539-28.031A39.288 39.288 0 00217.797 0H129a39.288 39.288 0 00-28.063 11.469A39.289 39.289 0 0089.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 015.676-13.895A19.26 19.26 0 01129 20h88.797a19.26 19.26 0 0113.926 5.605 19.244 19.244 0 015.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0" />
    <path d="M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0" />
  </svg>
);

const AddImages = ({ i = 0, setImages, images }) => {
  const classes = useStyles();

  return (
    <>
      <div className="row">
        <div className="col-lg">
          <CustomInput
            style={{ padding: `5px 10px`, minHeight: `45px` }}
            className="w-100"
            label="Photo Name"
            wrapperProps={{ style: { marginTop: `1.8rem` } }}
          />
        </div>
        <div className="col-lg pb-3">
          <label className="px-1 h6 text-secondary fw-bold" for={`image_${i}`}>
            Upload Photo
          </label>
          <input
            type="file"
            class="form-control form-control-lg text-secondary"
            id={`image_${i}`}
          />
        </div>
        <div className="col-lg-3 d-flex align-items-end pb-3">
          <ButtonGroup>
            <Button
              variant="contained"
              onClick={() => setImages([...images, {}])}
              color="secondary"
              startIcon={<span style={{ fontSize: 20 }}>+</span>}
            >
              Add Image
            </Button>
            {images.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  setImages(images.filter((el, index) => index !== i))
                }
                className={classes.errorButton}
                startIcon={<Delete fill="currentColor" width={20} />}
              >
                Delete
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default AddImages;
