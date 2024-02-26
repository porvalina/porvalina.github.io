import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import avatar from '../images/avatar.png';

export default () => (
  <section id="landing">
    <Stack className="container" justifyContent="space-between" spacing={2} style={{padding: 15}}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Stack className="heroContainer" justifyContent="flex-start" spacing={2}>
          <Typography sx={{ typography: { xs: 'h3', sm: 'h1' } }}>
            Alina Porval
          </Typography>
          <Typography sx={{ typography: { xs: 'h5', sm: 'h3' } }}>
            Front End Developer
          </Typography>
        </Stack>
        <Stack justifyContent="center" spacing={2} style={{padding: 5}}>
          <Avatar
            alt="Alina Porval"
            src={avatar}
            sx={{
              width: {
                xs: 180, // theme.breakpoints.up('xs')
                sm: 180, // theme.breakpoints.up('sm')
                md: 250, // theme.breakpoints.up('md')
                lg: 250, // theme.breakpoints.up('lg')
                xl: 250, // theme.breakpoints.up('xl')
              },
              height: {
                xs: 180, // theme.breakpoints.up('xs')
                sm: 180, // theme.breakpoints.up('sm')
                md: 250, // theme.breakpoints.up('md')
                lg: 250, // theme.breakpoints.up('lg')
                xl: 250, // theme.breakpoints.up('xl')
              },
            }}
          />
        </Stack>
      </Stack>
      <Typography sx={{ typography: { xs: 'body2', sm: 'body1' } }} style={{color: "white"}}>
          &quot;I enjoy making websites that look good and are easy to use. 
              I'm not afraid to try new things because I love learning and facing challenges. 
              With my past work experience, I know how to handle all parts of projects well.&quot;
      </Typography>
    </Stack>
  </section>
);