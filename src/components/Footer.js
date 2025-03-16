import { Typography, Box } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "lightgray",
      color: "black",
      textAlign: "center",
      padding: "10px 0",
    }}
  >
    <Typography variant="body2">© 2024 Sayantan Banik | All Rights Reserved</Typography>
  </Box>
);

export default Footer;
