import { Container, Typography, Paper, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";

const Home = () => (
  <Container>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      
      {/* Profile Image - Larger Avatar */}
      <Box display="flex" justifyContent="center" mt={4}>
        <Avatar 
          alt="Sayantan Banik" 
          src="/profile.jpg" // Make sure this matches your filename in the public folder
          sx={{ width: 200, height: 200, border: "5px solid #1976d2" }} // Increased size
        />
      </Box>

      {/* About Me Section - Transparent Background */}
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 4, 
          marginTop: 4, 
          borderRadius: 3, 
          textAlign: "center", 
          background: "rgba(255, 255, 255, 0.6)", // ✅ Semi-transparent white
          backdropFilter: "blur(10px)", // ✅ Adds a subtle glass effect
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am a Software Engineer with 3+ years of experience in full-stack development, specializing in 
          React, Angular, TypeScript, Java, and cloud platforms like Google Cloud and AWS. I am passionate about 
          building scalable applications, optimizing UI/UX performance, and implementing microservices architecture.
        </Typography>
        <Typography variant="body1" paragraph>
          With experience at LexisNexis and Cognizant Technology Solutions, I thrive in dynamic environments, 
          continuously learning and integrating new technologies to solve complex problems.
        </Typography>
        <Typography variant="body1" paragraph>
          Beyond work, I am an avid gamer, participating in competitive tournaments that enhance my 
          strategic thinking. As a food enthusiast, I love exploring different cuisines, while balancing 
          my lifestyle with regular workouts at the gym.
        </Typography>
        <Typography variant="body1" paragraph>
          I enjoy meeting new people, exchanging ideas, and working on innovative projects. I am always 
          eager to grow and contribute meaningfully, both professionally and personally.
        </Typography>
      </Paper>

    </motion.div>
  </Container>
);

export default Home;
