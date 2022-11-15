import React from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Components/Navbar";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  Button,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useState, useContext } from "react";
import { appContext } from "../App";
import { NavLink } from "react-router-dom";
import shortid from "shortid";

const useStyle = makeStyles({
  btn: {
    backgroundColor: "white",
    padding: "20px 50px",
    marginRight: "10px",
  },
  btns: {
    marginRight: "10px",
    border: "2px solid",
    padding: "10px 10px",
  },
  btnsActive: {
    marginRight: "10px",
    border: "2px solid",
    padding: "10px 10px",
    backgroundColor: "white",
  },
  productdata: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

function Product() {
  const { cart, setCart, active } = useContext(appContext);
  const [size, setSize] = useState("");
  const [key, setKey] = useState(shortid.generate());
  const [check, setCheck] = useState(false);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const classes = useStyle();

  const addToCart = () => {
    if (cart !== [] && size !== "") {
      setCart([...cart, productItem]);
      setCheck(true);
    }
  };

  const productName = `${active.dep} ${active.year} ( ${active.gender} )`;
  const productItem = {
    ...active,
    size: size,
    title: productName,
    cost: 700,
    id: key,
  };

  const handleSize = (elem) => {
    setKey(shortid.generate());
    setSize(elem);
  };
  return (
    <Container className="container">
      <Navbar />
      <Typography componet="h2" variant="h4" className="heading headingpd">
        {productName}
      </Typography>
      <Grid container direction="row" spacing={4}>
        <Grid item md={4}>
          <Card>
            <CardMedia>
              <img src={active.image} alt="product" height="400px" />
            </CardMedia>
            <CardActions>
              <Button className={classes.btn}>
                <FavoriteIcon /> Add to Wishlist
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className={classes.productdata} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography component="h3" variant="h2">
                ₹700
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="h4" variant="body1">
                Choose Size
              </Typography>
            </Grid>

            <Grid item>
              {sizes.map((elem, i) => {
                return (
                  <Button
                    key={i}
                    className={
                      elem === size ? classes.btnsActive : classes.btns
                    }
                    onClick={() => handleSize(elem)}
                  >
                    {elem}
                  </Button>
                );
              })}
            </Grid>

            <Grid item>
              <Button className={classes.btn} onClick={() => addToCart()}>
                <ShoppingCartIcon /> Add To cart
              </Button>
              {check && (
                <NavLink to="/cart">
                  <Button className={classes.btn}>Go to cart</Button>
                </NavLink>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
