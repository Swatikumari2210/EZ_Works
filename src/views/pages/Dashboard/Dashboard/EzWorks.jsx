import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, TextField, Button,useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import Cards from "../../../../components/cards";

const services = [
  { title: "Presentation Design", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.", icon: "📊" },
  { title: "Audio - Visual Production", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.", icon: "🎬" },
  { title: "Translation Services", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.", icon: "📝" },
  { title: "Graphic Design", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.", icon: "🎨" },
  { title: "Research & Analytics", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.", icon: "📊" },
  { title: "Data Processing", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.", icon: "💾" }
];

const EzWorks = () => {
  
const isMobile = useMediaQuery("(max-width:600px)");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (email.endsWith("@ez.works")) {
      setError("Emails ending with @ez.works are not allowed");
      return;
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", { email });
      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (err) {
      setError("Something went wrong. Please try again");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box sx={{ textAlign: "left", mb: 3, paddingLeft: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
  src="/images/logo(1).png"
  alt="EZ Works Logo"
  width={isMobile ? "50px" : "100px"}  // Adjust width dynamically
  style={{ marginRight: "10px" }}
/>
  <Typography variant="h1" fontWeight={700} color="rgb(85 202 243)">
     <span style={{ color: "rgb(85 202 243)" }}>Works</span>
  </Typography>
</Box>

            <Typography variant="h2" fontWeight={400} color="#112949" sx={{ mt: 5,width:"104%" }}>Suite Of Business Support Services</Typography>
            <Typography variant="h5" fontWeight={400} sx={{ mt: 7, maxWidth: "600px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Typography>
          </Box>
          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",  // Change direction based on screen size
    gap: 2,
    // maxWidth: "400px",
    paddingLeft: "10px",
    mt: 4,
  }}
>
  <TextField
    fullWidth
    label="Email Address"
    variant="outlined"
    size="small"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={!!error}
    helperText={error}
    sx={{
      width: "100%", // Ensures full width on all screen sizes
      "& .MuiInputBase-root": {
        height: "60px",  // Ensures proper height
      },
      "& .MuiInputBase-input": {
        height: "70px",  // Adjusts inner input height
        padding: "10px", // Adjusts padding for proper alignment
      },
    }}
  />
   <Button
    variant="contained"
    color="warning"
    fullWidth={isMobile} // Full-width only on mobile
    sx={{
      backgroundColor: "#ea7b2c",
      color: "white",
      "&:hover": { backgroundColor: "#ea7b2c" },
      width: isMobile ? "100%" : "250px", // Full-width on mobile, fixed 150px on larger screens
      height: "60px", // Fixed height for consistency
      padding: "10px",
    }}
    onClick={handleSubmit}
  >
    Contact Me
  </Button>
</Box>

          {message && <Typography sx={{ mt: 2, color: "green", paddingLeft: "30px" }}>{message}</Typography>}
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
         <Cards/>
          </Grid>
        </Grid>
      {/* </Grid> */}
    </Container>
  );
};

export default EzWorks;
