import { Container, Typography } from "@mui/material";

const skills = ["JavaScript", "React", "TypeScript", "CSS", "SVG", "Webpack", "CI/CD", "Jest"];

const Skills = () => (
  <Container>
    <Typography variant="h4">Skills</Typography>
    <ul>
      {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
  </Container>
);

export default Skills;
