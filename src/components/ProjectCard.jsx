import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function ProjectCard({title, img, description, role, technologies, link}) {

  const followLink = () => {
    window.open(link, '_blank')
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={followLink}>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        width="100"
        image={img}
        alt="project img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        { role ? (<Typography variant="body2" color="text.secondary">
          Role: {role}
        </Typography>) : null}
        { role ? (<Typography variant="body2" color="text.secondary">
          Techs: {technologies}
        </Typography>) : null}
      </CardContent>
    </Card>
  );
}