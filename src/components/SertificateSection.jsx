import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import sertificates from '../sertificates';

function SertificateList({ data }) {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map(i => <Grid item xs={4}><ProjectCard {...i} /></Grid>)}
      </Grid>
    </div>
  );
}

const SertificateSection = () => (
  <section id="sertificates">
    <h2 className='heroSertificates'>IT Skills</h2>
    <SertificateList data={sertificates}/>
  </section>
);

export default SertificateSection;