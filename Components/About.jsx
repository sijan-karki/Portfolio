import * as React from "react";
import { Box, Card, Typography, Chip, Button, CardMedia } from "@mui/material";
import images from "./assets/sijan.jpeg";

export default function AboutCard() {
  return (
    <Card
      id="about"
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "none",
        borderRadius: 0,
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      {/* Title Section */}
      <Box textAlign="center" mb={6}>
        <Box
          sx={{
            height: "4px",
            width: "100px",
            margin: "40px auto 16px auto",
            background:
              "linear-gradient(90deg, transparent, #00FFFF, transparent)",
            boxShadow: "0 0 10px #00FFFF",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            color: "#00FFFF",
            fontWeight: "bold",
            textShadow: "0 0 10px #00FFFF",
            "& span": {
              color: "white",
              textShadow: "0 0 5px white",
            },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          About <span>Me</span>
        </Typography>
      </Box>

      {/* Content Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            color: "white",
            maxWidth: 600,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: "#00FFFF",
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "1.4rem" },
            }}
          >
            Crafting Digital Experiences
          </Typography>

          <Typography
            paragraph
            sx={{
              mb: 3,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            I'm a passionate{" "}
            <strong style={{ color: "#00FFFF" }}>Front-End Developer</strong>{" "}
            with experience creating high-performance web applications. My
            journey began with curiosity about how things work, evolving into a
            professional career building innovative solutions.
          </Typography>

          <Typography
            paragraph
            sx={{
              mb: 4,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            I specialize in <strong>JavaScript, TypeScript, React</strong>, and
            modern front-end development, with a focus on crafting accessible,
            responsive interfaces. Committed to clean code and continuous
            learning, I deliver engaging user experiences.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 4,
            }}
          >
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Redux",
              "Next.js",
              "Material UI",
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  background: "rgba(0, 255, 255, 0.1)",
                  color: "#00FFFF",
                  border: "1px solid rgba(0, 255, 255, 0.3)",
                  fontWeight: 500,
                  "&:hover": {
                    background: "rgba(0, 255, 255, 0.2)",
                    boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                  },
                }}
              />
            ))}
          </Box>

          <Button
            variant="outlined"
            sx={{
              color: "#00FFFF",
              borderColor: "#00FFFF",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgba(0, 255, 255, 0.1)",
                borderColor: "#00FFFF",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
              },
            }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </Button>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            position: "relative",
            maxWidth: 500,
            mx: "auto",
            "&:before": {
              content: '""',
              position: "absolute",
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
              border: "2px solid #00FFFF",
              borderRadius: "20px",
              boxShadow: "0 0 20px #00FFFF, inset 0 0 20px #00FFFF",
              zIndex: 0,
              animation: "pulse 4s infinite alternate",
            },
            "@keyframes pulse": {
              "0%": { opacity: 0.7 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <CardMedia
            component="img"
            image={images}
            alt="Developer portrait"
            sx={{
              borderRadius: "16px",
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxHeight: { xs: 300, sm: 400, md: 500 },
              border: "4px solid rgba(0, 255, 255, 0.3)",
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "all 0.5s ease",
              ":hover": {
                transform: "scale(1.02)",
                boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)",
              },
            }}
          />
        </Box>
      </Box>
    </Card>
  );
}
