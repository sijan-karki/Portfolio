import * as React from "react";
import { useState, useRef } from "react";
import {
  Box,
  Avatar,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  EmailTwoTone,
  Send as SendIcon,
  Mail as MailIcon,
  LocationOn as LocationOnIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hwj00aj", "template_nke3vwb", form.current, {
        publicKey: "4naN1FVYcQ3xM_YWv",
      })
      .then(() => {
        setSnackbarMessage("Message sent successfully!");
        setSnackbarSeverity("success");
        setOpen(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setSnackbarMessage("Error in sending message.");
        setSnackbarSeverity("error");
        setOpen(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const openLocation = () => {
    window.open("https://maps.app.goo.gl/YrjM2tWZ7JCpsNja8", "_blank");
  };

  return (
    <Box
      id="contact"
      sx={{
        paddingTop: 8,
        flexGrow: 1,
        minHeight: "100vh",
        backgroundColor: "#0a0a0f",
        paddingBottom: 20,
      }}
    >
      {/* Email Icon */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Avatar
          alt="emailLogo"
          sx={{
            width: 64,
            height: 64,
            backgroundColor: "rgba(0, 255, 255, 0.1)",
            mb: 2.5,
          }}
        >
          <EmailTwoTone sx={{ height: 32, width: 32, color: "#00FFFF" }} />
        </Avatar>
      </Box>

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          mb: 2.5,
          fontSize: { xs: "2rem", sm: "3rem" },
        }}
      >
        Get In <span style={{ color: "#00FFFF" }}>Touch</span>
      </Typography>

      {/* Subtitle */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "400px" },
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </Typography>
        </Box>
      </Box>

      {/* Grid Layout */}
      <Grid container spacing={6} justifyContent="center">
        {/* Form Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "#2C2C2C",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 255, 255, 0.1)",
              padding: 3,
              mt: 6,
              minHeight: "450px",
              maxWidth: "550px",
              display: "flex",
              flexDirection: "column",
              mx: "auto",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold", mb: 3 }}
            >
              Send Me a Message
            </Typography>

            <form ref={form} onSubmit={sendEmail}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  mb: 2,
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#00FFFF" },
                    "&:hover fieldset": { borderColor: "#00FFFF" },
                    "&.Mui-focused fieldset": { borderColor: "#00FFFF" },
                    "& .MuiInputBase-input": { color: "white" },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  mb: 2,
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#00FFFF" },
                    "&:hover fieldset": { borderColor: "#00FFFF" },
                    "&.Mui-focused fieldset": { borderColor: "#00FFFF" },
                    "& .MuiInputBase-input": { color: "white" },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  mb: 3,
                  "& label": { color: "white" },
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#00FFFF" },
                    "&:hover fieldset": { borderColor: "#00FFFF" },
                    "&.Mui-focused fieldset": { borderColor: "#00FFFF" },
                    "& .MuiInputBase-input": { color: "white" },
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#00FFFF",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#00FFFFCC",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  },
                }}
              >
                Send Message
                <SendIcon sx={{ ml: 2, color: "black", fontSize: 16 }} />
              </Button>
            </form>
          </Box>
        </Grid>

        {/* Info Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "#2C2C2C",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 255, 255, 0.1)",
              padding: 3,
              mt: 6,
              minHeight: "450px",
              maxWidth: "550px",
              display: "flex",
              flexDirection: "column",
              mx: "auto",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "white", fontWeight: "bold", mb: 3 }}
            >
              Contact Information
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "grey", fontWeight: "bold" }}
            >
              Email
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <MailIcon sx={{ color: "grey" }} />
              <Link
                href="mailto:sijankarki415@gmail.com"
                sx={{
                  marginLeft: 1,
                  textDecoration: "none",
                  color: "#00FFFF",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                sijankarki415@gmail.com
              </Link>
            </Box>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "grey", fontWeight: "bold" }}
            >
              Based In
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon sx={{ color: "white" }} />
              <IconButton
                onClick={openLocation}
                sx={{ marginLeft: 1, color: "white" }}
              >
                <Typography> Sankhamul, Kathmandu</Typography>
              </IconButton>
            </Box>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "grey", fontWeight: "bold" }}
            >
              Connect
            </Typography>
            <Box display="flex" gap={2} mb={8}>
              <IconButton
                onClick={() =>
                  window.open("https://github.com/sijan-karki", "_blank")
                }
              >
                <GitHubIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sijan-karki-a58846228/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <Typography variant="body1" sx={{ color: "grey" }}>
              Prefer to schedule a call? Use the contact form to request a
              meeting time.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar Alert */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
