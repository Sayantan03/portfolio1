import { Card, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, tech, link }) => (
  <Card style={{ margin: 20 }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography color="textSecondary">{tech}</Typography>
      <Button href={link} target="_blank">View Project</Button>
    </CardContent>
  </Card>
);

export default ProjectCard;
