import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" py={6} bgcolor="#0a0a0f">
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color="grey"
            sx={{ mb: { xs: 2, md: 0 } }}
          >
            © {new Date().getFullYear()} Sijan. All rights reserved.
          </Typography>

          <IconButton
            href="#home"
            sx={{
              border: "1px solid",
              borderColor: theme.palette.grey[800],
              color: theme.palette.grey[400],
              "&:hover": {
                borderColor: "#00ffff",
                color: "#00ffff",
              },
            }}
            aria-label="Back to top"
          >
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
