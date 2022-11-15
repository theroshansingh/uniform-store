import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@material-ui/core";

function ProductCard({ data }) {
  const { course, year, gender, image } = data;
  return (
    <Card>
      <CardActionArea>
        <CardHeader title={`${course} ${year}`} subheader={`${gender}`} />
        <CardMedia
          component="img"
          alt="Picture"
          height="240px"
          image={image}
          title="Picture"
        />
        <CardActions>
          {/* <Button size="small">View Product</Button> */}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
