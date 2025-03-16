import { Container, Typography, Paper, Box, Link, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactDetails = [
  {
    icon: <PhoneIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Phone",
    info: "704-369-4415",
    link: "tel:+17043694415",
  },
  {
    icon: <EmailIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Email",
    info: "baniksayantan19@gmail.com",
    link: "mailto:baniksayantan19@gmail.com",
  },
  {
    icon: <LinkedInIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "LinkedIn",
    info: "linkedin.com/in/sayantan-banik",
    link: "https://www.linkedin.com/in/sayantan-banik",
  },
];

const Contact = () => (
  <Container sx={{ marginTop: "100px", textAlign: "center" }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      
      {/* Contact Section */}
      <Typography variant="h4" gutterBottom color="primary">
        Contact Me
      </Typography>

      {/* Contact Holders */}
      <Grid container spacing={4} justifyContent="center">
        {contactDetails.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box mb={1}>{contact.icon}</Box>
              <Typography variant="h6">{contact.title}</Typography>
              <Typography variant="body1">
                <Link href={contact.link} target="_blank" color="inherit" underline="hover">
                  {contact.info}
                </Link>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </motion.div>
  </Container>
);

export default Contact;
