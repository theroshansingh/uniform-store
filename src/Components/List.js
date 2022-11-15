import { Grid, Typography, Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { appContext } from "../App";

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
    borderTop: "0px",
    borderLeft: "0px",
    borderRight: "0px",
    padding: "20px",
    margin: "5px auto",
  },
  productInList: {
    marginRight: "10px",
  },
  input: {
    border: "none",
    width: "30px",
    height: "30px",
    color: "black",
    textAlign: "center",
    "&:focus": {
      border: "none",
    },
  },
});

const List = ({ props }) => {
  const { setTotal, cart, setCart } = useContext(appContext);
  const { title, size, id, image } = props;
  // console.log(title, size);
  const classes = useStyles();
  let price = 700;
  const currentItem = cart.filter((e, i) => id === e.id);
  const restItem = cart.filter((e, i) => id !== e.id);

  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);

    currentItem[0].cost = price * count;

    setCart([...restItem, currentItem[0]]);
  };

  const subCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCart(cart.filter((e, i) => e !== props));
    }
  };

  const deleteItem = () => {
    setCart(cart.filter((e, i) => e !== props));
    setTotal(cart.reduce((a, e) => a + e.cost, 0));
  };

  useEffect(() => {
    setTotal(() => cart.reduce((a, e) => a + e.cost, 0));
  });

  return (
    <Grid item md={8} className={classes.list}>
      <Grid container direction="row" spacing={3}>
        <Grid className={classes.productInList}>
          <img src={image} alt="product" width={50} />
        </Grid>
        <Grid>
          <Typography>{`${title} - ${size}`}</Typography>

          <Grid>
            <Button className={classes.counterBtn} onClick={() => subCount()}>
              -
            </Button>
            <input
              readOnly
              type="text"
              value={count}
              className={classes.input}
            />{" "}
            <Button className={classes.counterBtn} onClick={() => addCount()}>
              +
            </Button>
            <DeleteIcon onClick={() => deleteItem()} />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Typography component="h5" variant="h5">
          ₹{count * price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default List;
