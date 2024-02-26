import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import projects from './projects';
import SertificateSection from './components/SertificateSection';


function ProjectsList({ data }) {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map(i => <Grid item sm={4} xs={12}><ProjectCard {...i} /></Grid>)}
      </Grid>
    </div>
  );
}

const ProjectsSection = () => (
  <section id="projects">
    <h2 className='heroProjects'>Featured Projects</h2>
    <ProjectsList data={projects}/>
  </section>
);

const PortfolioApp = () => (
  <div className='mainContainer'>
    <Header />
    <LandingSection />
    <Container>
      <ProjectsSection />
      <SertificateSection />
    </Container>
    <Footer />
  </div>
);

export default PortfolioApp;