import React from "react";
// import { Link } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { googleLogout } from "@react-oauth/google";
import Logout from "@mui/icons-material/Logout";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
// import Login from "./login";
// import "./NavBar.css"; // Add this if you want to style the nav bar

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4F75FF",
    padding: "15px",
  },
  brand: {
    color: "#fff",
    fontSize: "24px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "0 15px",
    fontSize: "18px",
  },
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const logOut = () => {
    googleLogout();
    localStorage.clear();
    navigate("/Login");
  };

  return (
    <nav style={styles.nav}>
      <EventNoteIcon />
      {localStorage.getItem("Name") === null ? (
        <>
          <Box sx={{ maxHeight: "2.2rem", justifyContent: "space-between" }}>
            <Button variant="contained" sx={{ marginRight: 2 }}>
              Login
            </Button>
            <Button variant="contained">Signup</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ maxHeight: "2.2rem" }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  <AccountBoxIcon />
                </Avatar>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Typography fontSize="15px">
                {localStorage.getItem("Name")}{" "}
              </Typography>
            </MenuItem>
            {/* <MenuItem onClick={handleNavigateProfile}>
        <Avatar />
        My Profile
      </MenuItem> */}
            {/* <MenuItem>
        <ListItemIcon>
       
        </ListItemIcon>
      </MenuItem> */}
            <MenuItem onClick={logOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
      {/* <IconButton  size="small">
        <Typography>Logout </Typography>
        <Logout />
      </IconButton> */}
    </nav>
  );
};

export default Navbar;
