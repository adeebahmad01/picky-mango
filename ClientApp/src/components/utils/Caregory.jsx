import { Card, CardActionArea, IconButton,Paper } from "@material-ui/core";
import React from "react";

const Caregory = ({text,image,value}) => {
  return (
    <CardActionArea className="box p-0 one">
      <Card component={Paper} elevation={3}>
      <img src={image} className="w-100" alt={text} />
      <h1 className="m-0">{text}</h1>
      <div className="my_text">
        <div>
        <IconButton disableRipple size="large" style={{background:"var(--color-primary)",width: 60,height: 60,color: `#fff`}} >{value}</IconButton>
        </div>
      </div>
    </Card>
    </CardActionArea>
  );
};

export default Caregory;
