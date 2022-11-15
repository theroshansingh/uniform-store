import React from "react";
import categories from "../data";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Components/Navbar";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Container className="home">
      <Navbar />
      <Grid className="container">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          className="heading"
        >
          College Uniforms
        </Typography>
        <Grid container direction="row" spacing={3}>
          {categories.map((e, i) => (
            <Grid item xs={12} md={4} lg={4} key={i}>
              <NavLink to={`/${e[0][0].split(" ").join("").toLowerCase()}`}>
                <Card className="tabs">
                  <CardActionArea>
                    <CardHeader title={e[0]} />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">
                        {e[1].map((elem, i) => ` ${elem[0]} `)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
