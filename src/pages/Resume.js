import { Container, Typography, Box, IconButton } from "@mui/material";
import { Visibility, Download } from "@mui/icons-material";

const Resume = () => (
  <Container sx={{ marginTop: "100px", textAlign: "center", position: "relative" }}>
    
    {/*Title */}
    <Typography variant="h4" gutterBottom color="primary">
      My Resume
    </Typography>

    {/* Buttons */}
    <Box sx={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 2 }}>
      <IconButton 
        href={`${process.env.PUBLIC_URL}/assets/Sayantan_Resume_Software__Mujin.pdf`} 
        target="_blank" 
        color="primary"
        title="View Full Resume"
      >
        <Visibility fontSize="large" />
      </IconButton>
      <IconButton 
        href={`${process.env.PUBLIC_URL}/assets/Sayantan_Resume_Software__Mujin.pdf`} 
        download="Sayantan_Resume.pdf" 
        color="secondary"
        title="Download Resume"
      >
        <Download fontSize="large" />
      </IconButton>
    </Box>

    {/* Resume */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <img 
        src={`${process.env.PUBLIC_URL}/assets/resume.jpg`}
        alt="Resume"
        style={{
          width: "60%", 
          border: "2px solid #1976d2",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
        }}
      />
    </Box>

  </Container>
);

export default Resume;
