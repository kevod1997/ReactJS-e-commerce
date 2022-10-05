/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import Grid from '@mui/material/Grid';


const pages = [
  { enlace: "/category/Clasicos", nombre: "Clasicos" },
  { enlace: "/category/Oferta", nombre: "Oferta" },
  { enlace: "/category/Temporales", nombre: "Temporales" },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img
              className="firstLogo"
              style={{
                height: "95px",
                width: "105%",
                cursor: "pointer",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              src="https://i.ibb.co/tJtJSBp/1.jpg"
              alt="logo"
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  style={{ backgroundColor: "#6d4c41" }}
                  key={page.nombre}
                  onClick={handleCloseNavMenu}
                >
                  <NavLink
                    to={page.enlace}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography textAlign="center">{page.nombre}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
            <Link to={"/"}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
                <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            </Grid>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.nombre}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={page.enlace}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginRight: "15px",
                    marginLeft: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {page.nombre}{" "}
                </NavLink>
              </Button>
            ))}
          </Box>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
