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
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const drawerWidth = 240;
const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

// Motion component for fade-in animations
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeNavItem, setActiveNavItem] = React.useState("Home");

  const [displayedName, setDisplayedName] = React.useState("");
  const [currentProfession, setCurrentProfession] = React.useState("");
  const [professionIndex, setProfessionIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const fullName = "SIJAN KARKI";
  const professions = ["Front End Developer", "React Developer"];

  // Particles initialization
  const particlesInit = React.useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Name animation effect
  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Profession typewriter effect
  React.useEffect(() => {
    const handleTyping = () => {
      const currentText = professions[professionIndex];
      setCurrentProfession((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentProfession === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentProfession === "") {
        setIsDeleting(false);
        setProfessionIndex((professionIndex + 1) % professions.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingTimer);
  }, [currentProfession, isDeleting, professionIndex]);

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
                position: "relative",
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
              {activeNavItem === item && (
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#00FFFF",
                    boxShadow: "0 0 8px #00FFFF",
                  }}
                />
              )}
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
        position="fixed"
        sx={{
          bgcolor: "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(10px)",
          backgroundImage: "linear-gradient(45deg, #121212, #090909, #3A3A3A)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
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
            component={motion.div}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
              flexGrow: 1,
              pl: 2,
              fontWeight: "bold",
              letterSpacing: 2,
              color: "#00FFFF",
              textShadow: "0 0 10px #00FFFF",
              "& span": {
                color: "white",
                textShadow: "0 0 5px white",
              },
            }}
          >
            Si<span>jan</span>
          </Typography>
          <Box
            component={motion.div}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{ pr: 3, display: { xs: "none", sm: "block" } }}
          >
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
                  },
                }}
              >
                {item}
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: activeNavItem === item ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: "#00FFFF",
                    transition: "width 0.3s ease",
                    boxShadow:
                      activeNavItem === item ? "0 0 8px #00FFFF" : "none",
                  }}
                />
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Particles Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Particles
            init={particlesInit}
            options={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#00FFFF",
                },
                opacity: {
                  value: 0.3,
                  random: true,
                },
                size: {
                  value: 3,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#00FFFF",
                  opacity: 0.1,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
              },
              retina_detect: true,
            }}
          />
        </Box>

        <Box
          textAlign="center"
          sx={{
            zIndex: 1,
            position: "relative",
            padding: { xs: 2, sm: 4 },
          }}
        >
          <FadeInWhenVisible delay={0.2}>
            <Typography
              variant="body1"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#00FFFF" }}
            >
              Hello, I am
            </Typography>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: "white",
                marginTop: 3,
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
              gutterBottom
            >
              {displayedName}
              <Box
                component="span"
                sx={{
                  opacity: 1,
                  animation: "blink 1s infinite",
                  "@keyframes blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                  },
                  display:
                    displayedName.length < fullName.length
                      ? "inline-block"
                      : "none",
                }}
              >
                |
              </Box>
            </Typography>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.6}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                marginTop: -3,
                opacity: 0.9,
                background: "linear-gradient(90deg, #29baac, #6a1f4e)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                textShadow: "0 0 20px rgba(41, 186, 172, 0.3)",
              }}
            >
              {currentProfession}
              <Box
                component="span"
                sx={{
                  opacity: 1,
                  animation: "blink 1s infinite",
                  "@keyframes blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                  },
                }}
              >
                |
              </Box>
            </Typography>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.7}>
            <Box
              sx={{
                marginTop: 3,
                height: "1px",
                width: "96px",
                marginX: "auto",
                background:
                  "linear-gradient(to right, transparent, rgba(0, 255, 255, 0.5), transparent)",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "30%",
                  height: "100%",
                  background: "rgba(0, 255, 255, 0.8)",
                  animation: "shimmer 2s infinite linear",
                  "@keyframes shimmer": {
                    "0%": { left: "0%" },
                    "100%": { left: "100%" },
                  },
                },
              }}
            ></Box>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.8}>
            <Box
              width={{ xs: "90%", sm: "600px" }}
              sx={{ marginTop: 3, mx: "auto" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  marginTop: "20px",
                  fontSize: { xs: "16px", sm: "20px" },
                  lineHeight: 1.6,
                }}
                gutterBottom
              >
                Specialized in creating exceptional digital experiences with
                clean code and cutting-edge technologies.
              </Typography>
            </Box>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={1}>
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
                  component={motion.button}
                  whileHover={{
                    y: -5,
                    boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    color: "black",
                    boxShadow: "0px 4px 15px rgba(0, 176, 255, 0.8)",
                    borderColor: "#00FFFF",
                    backgroundColor: "#00FFFF",
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: "300px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    padding: "10px 24px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#00FFFFCC",
                      boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.8)",
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
                  component={motion.button}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    color: "#00FFFF",
                    borderColor: "#00FFFF",
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: "300px",
                    padding: "10px 24px",
                    fontSize: "16px",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                      borderColor: "#00FFFF",
                      boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)",
                      transition: "left 0.7s",
                    },
                    "&:hover::before": {
                      left: "100%",
                    },
                  }}
                  href="/cv(sijan).pdf"
                  download="Sijan_Karki_Resume.pdf"
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </FadeInWhenVisible>
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
