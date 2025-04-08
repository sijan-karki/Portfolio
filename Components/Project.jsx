import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with product catalog, user authentication, shopping cart, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop interface, task assignments, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&w=1200&q=80",
    technologies: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export default function FeaturedProject() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#0a0a0f",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            <Box component="span" sx={{ color: "#00FFFF" }}>
              Featured
            </Box>{" "}
            Projects
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { md: "center" },
              gap: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "gray", maxWidth: 600 }}>
              A selection of my recent work, showcasing my skills in frontend
              development.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#00FFFF",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Typography variant="body1">View all Projects</Typography>
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Box>
          </Box>
        </Box>

        {/* Use a simple Box with display:flex instead of Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                flex: "1 1 0",
                minWidth: 0, // Important for flex items to prevent overflow
              }}
            >
              <Card
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0, 255, 255, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{ position: "relative", height: 240, overflow: "hidden" }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                      transform:
                        hoveredProject === project.id
                          ? "scale(1.1)"
                          : "scale(1)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" color="white" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        href={project.demoUrl}
                        target="_blank"
                        size="small"
                        sx={{
                          color: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          },
                        }}
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        href={project.repoUrl}
                        target="_blank"
                        size="small"
                        sx={{
                          color: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          },
                        }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="grey" mb={2}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(0, 255, 255, 0.3)",
                          color: "#00ffff",
                          mt: 0.5,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
