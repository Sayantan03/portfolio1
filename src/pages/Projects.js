import { Container, Typography, Grid, Paper, Box, Link } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hand Gesture Recognition",
    tech: "Python, Jupyter Notebook",
    description: "Developed a machine learning model for recognizing hand gestures using image processing techniques. Published in Springer.",
    link: "https://doi.org/10.1007/978-981-13-7403-6_21",
  },
  {
    title: "Online Tram Booking System",
    tech: "C++, PHP, MySQL, HTML",
    description: "Designed and implemented an online tram reservation system, enabling users to book tickets with real-time availability updates.",
    link: "https://github.com/Sayantan03/HEXABYTES",
  },
  {
    title: "Path Tracing Terrain Robot",
    tech: "Python, OpenCV, Raspberry Pi",
    description: "Designed and developed an autonomous terrain robot capable of real-time path tracing using computer vision and embedded systems.",
  },
];

const Projects = () => (
  <Container sx={{ marginTop: "100px", paddingBottom: "20px", textAlign: "center" }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Typography variant="h4" gutterBottom color="primary">
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 3, textAlign: "center" }}>
              <Typography variant="h6" color="primary">{project.title}</Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic", color: "gray" }}>
                {project.tech}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {project.description}
              </Typography>
              {/* Show "View Project" only if a link exists */}
              {project.link && (
                <Box mt={2}>
                  <Link href={project.link} target="_blank" rel="noopener" color="secondary">
                    View Project
                  </Link>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  </Container>
);

export default Projects;
