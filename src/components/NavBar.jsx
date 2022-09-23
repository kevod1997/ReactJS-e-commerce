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
import { NavLink } from "react-router-dom";

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
                <MenuItem style={{backgroundColor: '#6d4c41'}} key={page.nombre} onClick={handleCloseNavMenu}>
                  <NavLink to={page.enlace} style={{textDecoration: 'none', color: 'white'}}>
                    <Typography textAlign="center">{page.nombre}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.nombre}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink to={page.enlace} style={{textDecoration: 'none', color: 'white', marginRight: '15px', marginLeft: '15px',fontWeight: 'bold'}}>
                  {" "}
                  {page.nombre}{" "}
                </NavLink>
              </Button>
            ))}
          </Box>
          <NavLink to='/cart'>
          <CartWidget />
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
