import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ScrollDown from "./ScrollDown";
const drawerWidth = 240;
const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeNavItem, setActiveNavItem] = React.useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: "#0a0a0f",
        color: "#FFFFFF",
        height: "100vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{ my: 3, fontWeight: "bold", letterSpacing: 2 }}
      >
        SIjan
      </Typography>
      <Divider sx={{ bgcolor: "#444444" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => handleNavItemClick(item)}
              sx={{
                textAlign: "center",

                "&:hover": { bgcolor: "#333333" },
              }}
            >
              <ListItemText
                primary={item}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: activeNavItem === item ? "#00FFFF" : "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id="home" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: "#0a0a0f",
          backgroundImage: "linear-gradient(45deg, #121212, #090909, #3A3A3A)", // Gradient effect
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              pl: 2,
              fontWeight: "bold",
              letterSpacing: 2,
              color: "#00FFFF",
              fontWeight: "bold",
              textShadow: "0 0 10px #00FFFF",
              "& span": {
                color: "white",
                textShadow: "0 0 5px white",
              },
            }}
          >
            Si<span>jan</span>
          </Typography>
          <Box sx={{ pr: 3, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavItemClick(item)}
                sx={{
                  color: activeNavItem === item ? "#00FFFF" : "#FFFFFF",
                  mx: 1,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  position: "relative",
                  display: "inline-block",
                  "&:hover": {
                    color: "#00FFFF",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#00FFFF",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "2px",
                    backgroundColor: "#00FFFF",
                    transition: "width 0.3s ease",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#1D1D1D",
              color: "#FFFFFF",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100vw",
          height: "100vh",
          bgcolor: "#121212",
        }}
      >
        <Box textAlign="center">
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#00FFFF" }}
          >
            Hello, I am
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "white",
              marginTop: 3,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
            gutterBottom
          >
            SIJAN KARKI
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              marginTop: -3,
              opacity: 0.7,
              background: "linear-gradient(90deg, #29baac, #6a1f4e)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Front End Developer
          </Typography>
          <Box
            sx={{
              marginTop: 3,
              height: "1px",
              width: "96px",
              marginX: "auto",
              background:
                "linear-gradient(to right, transparent, rgba(0, 255, 255, 0.5), transparent)",
              transition: "opacity 1s",
            }}
          ></Box>

          <Box
            width={{ xs: "90%", sm: "600px" }}
            sx={{ marginTop: 3, mx: "auto" }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginTop: "20px",
                fontSize: "20px",
                fontSize: { xs: "16px", sm: "20px" },
              }}
              gutterBottom
            >
              Specialized in creating exceptional digital experiences with clean
              code and cutting-edge technologies.
            </Typography>
          </Box>

          {/* Buttons below the text */}
          <Stack
            spacing={2}
            direction="column"
            alignItems="center"
            sx={{
              mt: 6,
              px: { xs: 2, sm: 6, md: 18 },
            }}
          >
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Button
                variant="contained"
                fullWidth={{ xs: true, sm: false }}
                sx={{
                  color: "black",
                  boxShadow: "0px 4px 15px rgba(0, 176, 255, 0.8)",
                  borderColor: "#00FFFF",
                  backgroundColor: "#00FFFF",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: "300px",
                  "&:hover": {
                    backgroundColor: "#00FFFFCC",
                    boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.8)",
                    color: "black",
                  },
                }}
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View My Work
              </Button>

              <Button
                variant="outlined"
                fullWidth={{ xs: true, sm: false }}
                sx={{
                  color: "#00FFFF",
                  borderColor: "#00FFFF",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: "300px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 255, 255, 0.1)",
                    borderColor: "#00FFFF",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  },
                }}
                href="/cv(sijan).pdf"
                download="Sijan_Karki_Resume.pdf"
              >
                Download Resume
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <ScrollDown />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
