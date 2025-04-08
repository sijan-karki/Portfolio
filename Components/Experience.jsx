import React, { useState } from "react";
import { Box, Grid, Card, Typography, Chip, Stack } from "@mui/material";
import FoundationIcon from "@mui/icons-material/Foundation";
import { Briefcase } from "lucide-react"; // Assuming you're using lucide-react for icons

const ExperienceCard = () => {
  const ExperienceList = [
    {
      id: 1,
      name: "CEMC Tech Solution",
      timeline: "2025 - Present",
      role: "Junior Front End Developer",
      description:
        "Led development of enterprise web applications using React, Node.js, and GraphQL. Led development of enterprise web applications using React, Node.js, and GraphQL. ",
      technologies: ["React", "Node.js", "GraphQL", "TypeScript", "MongoDB"],
    },
    {
      id: 2,
      name: "TECH PVT LTD",
      timeline: "2023 - 2024",
      role: "Front End Developer Intern",
      description:
        "Built responsive interfaces for client websites and applications. Collaborated with design and backend teams to implement features and optimize user experience.",
      technologies: ["JavaScript", "React", "Redux", "SASS", "Webpack"],
    },
    {
      id: 3,
      name: "VIZRT PVT LTD",
      timeline: "2022 - 2023",
      role: "UI Developer Trainee",
      description:
        "Assisted in creating user interfaces and components. Learned fundamentals of front-end development and best practices.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "jQuery"],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <Box
      id="experience"
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: "#0a0a0f",
        minHeight: "75vh",
        paddingBottom: 14,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          margin: "60px auto 86px auto",
          textAlign: "center",
          color: "#00FFFF",
          fontWeight: "bold",
          textShadow: "0 0 10px #00FFFF",
          "& span": {
            color: "white",
            textShadow: "0 0 5px white",
          },
        }}
      >
        Work <span>Experience</span>
      </Typography>

      <Grid container spacing={8} sx={{ padding: "0 32px" }}>
        {/* Timeline Navigation */}
        <Grid item size={{ xs: 12, md: 3 }}>
          {/* <Stack spacing={2}> */}
          {ExperienceList.map((experience, index) => (
            <Box
              key={experience.id}
              sx={{
                marginBottom: 2,
                cursor: "pointer",
                borderLeft:
                  selectedExperience === index
                    ? "3px solid #00FFFF"
                    : "3px solid transparent",
                paddingLeft: 4,
                whiteSpace: "nowrap",
                transition: "border-left 0.3s ease",
                "&:hover": {
                  borderLeft: "3px solid #00FFFF",
                },
              }}
              onClick={() => setSelectedExperience(index)}
            >
              <Grid
                container
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FoundationIcon
                  sx={{
                    color: selectedExperience === index ? "#00FFFF" : "white",
                    mr: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "left",
                    color: selectedExperience === index ? "#00FFFF" : "white",
                    mr: 2,
                  }}
                >
                  {experience.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: 5,
                    color: selectedExperience === index ? "#00FFFF" : "white",
                  }}
                >
                  {experience.timeline}
                </Typography>
              </Grid>
            </Box>
          ))}
        </Grid>

        {/* Experience Details */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              bgcolor: "#2C2C2C",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 255, 255, 0.1)",
              padding: 3,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                color: "white",
              }}
            >
              {ExperienceList[selectedExperience].role}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                color: "#00FFFF",
              }}
            >
              {ExperienceList[selectedExperience].name} •{" "}
              {ExperienceList[selectedExperience].timeline}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
              }}
            >
              {ExperienceList[selectedExperience].description}
            </Typography>

            {/* Technologies Section */}
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#A1A1A1",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                TECHNOLOGIES:
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {ExperienceList[selectedExperience].technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      bgcolor: "#333",
                      borderColor: "#00FFFF",
                      color: "#00FFFF",
                      fontSize: "0.8rem",
                      borderRadius: "16px",
                      borderWidth: "1px",
                      "&:hover": {
                        backgroundColor: "#00FFFF",
                        color: "#333",
                      },
                    }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceCard;
