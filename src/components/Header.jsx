import React, { useState } from "react";
import {
  Paper,
  Typography as Font,
  Button,
  Grid,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import OpenMenu from "@material-ui/icons/MenuOpen";
import SideBar from "./SideBar";
import logo from "../assets/pics/logo.png";
import { sidebarAni } from "../misc/AnimeLibrary";
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    sidebarAni();
    setOpen(!open);
  };
  return (
    <div className="HeaderRoot">
      <Paper square elevation={2} component="nav">
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-around"
            direction="row"
            spacing={3}
            alignItems="center"
            id="nav-items"
          >
            <Grid item id="logo-container">
              <img src={logo} alt="JM Logo" className="Logo" />
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/"
                color="primary"
                variant="contained"
              >
                <Font variant="button">Home</Font>
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/characters"
                color="primary"
                variant="contained"
              >
                <Font variant="button">Characters</Font>
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/locations"
                color="primary"
                variant="contained"
              >
                <Font variant="button">Locations</Font>
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/episodes"
                color="primary"
                variant="contained"
              >
                <Font variant="button">Episodes</Font>
              </Button>
            </Grid>
            <Grid item>
              <Button component='a' variant='contained' color='primary' href='https://jesusmj.com'>
                  <Font variant='button'>
                      Back Home
                  </Font>
              </Button>
            </Grid>
            <Grid item id="menu-container">
              {open ? (
                <OpenMenu onClick={handleOpen} />
              ) : (
                <Menu onClick={handleOpen} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <SideBar />
    </div>
  );
}
