import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Components/Navbar";
import { Grid, Container, Button } from "@material-ui/core";
import List from "../Components/List";
import { makeStyles } from "@material-ui/core";

import { appContext } from "../App";

const useStyle = makeStyles({
  total: {
    margin: "5px auto",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkout: {
    margin: "5px auto",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkoutBtn: {
    fontSize: "16px",
    backgroundColor: "white",
    padding: "10px 40px",
  },
});

function Cart() {
  const { cart, total } = useContext(appContext);
  const classes = useStyle();

  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Grid className="container cart">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            className="heading"
          >
            {cart.length === 0 ? "Empty Cart" : "Your Cart"}
          </Typography>

          {cart.length === 0 ? (
            ""
          ) : (
            <>
              {cart.map((e, i) => (
                <List key={e.id} props={e}></List>
              ))}
              <Grid item md={8} className={classes.total}>
                <Typography component="h3" variant="h3">
                  Total
                </Typography>
                <Typography component="h3" variant="h3">
                  ₹{total}
                </Typography>
              </Grid>
              <Grid item md={8} className={classes.checkout}>
                <Button className={classes.checkoutBtn}>Check Out</Button>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
