import { useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { keyframes } from "@mui/system";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const ScrollDown = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 700);
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 40, // bottom-10
        left: "50%",
        transform: "translateX(-50%)",
        transition: "opacity 1s",
        opacity: isMounted ? 0.7 : 0,
      }}
    >
      <Link
        href="#about"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.5)", // text-white/50
          textDecoration: "none",
          transition: "color 0.3s",
          "&:hover": {
            color: "#00FFFF",
          },
        }}
      >
        <Typography variant="caption" sx={{ mb: 1 }}>
          Scroll Down
        </Typography>
        <ArrowDownwardIcon
          sx={{
            fontSize: 24,
            animation: `${bounce} 1.5s infinite`,
            "&:hover": {
              color: "#00FFFF",
            },
          }}
        />
      </Link>
    </Box>
  );
};

export default ScrollDown;
