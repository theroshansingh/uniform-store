import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ProductCard from "../../Components/ProductCard";
import categories from "../../data";
import Navbar from "../../Components/Navbar";
import { useContext } from "react";
import { appContext } from "../../App";
import { NavLink } from "react-router-dom";

function Btech() {
  const { setActive } = useContext(appContext);

  const handleClick = (pro) => {
    setActive(pro);
  };

  let category = categories[0][1][0];
  return (
    <Container className="container">
      <Navbar />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        className="heading"
      >
        Btech Uniforms
      </Typography>
      <Grid container direction="row" spacing={3}>
        {category[1].map((e, i) =>
          e.genders.map((elem, ind) => (
            <Grid item xs={12} s={4} md={3} lg={3} key={`${elem.key}`}>
              {
                <NavLink
                  to="/product"
                  onClick={() =>
                    handleClick({
                      dep: "BTech",
                      course: "",
                      year: e.year,
                      gender: elem.gen,
                      image: elem.image,
                    })
                  }
                >
                  <ProductCard
                    data={{
                      dep: "BTech",
                      course: "",
                      year: e.year,
                      gender: elem.gen,
                      image: elem.image,
                    }}
                  />
                </NavLink>
              }
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Btech;
