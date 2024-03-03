import react from 'react';
import NavBar from './NavBar';
import './Home.css';

function About() {
  return (
    <div>
      <NavBar />
      <h1>About Me</h1>
      <section className="about-me">
        I've spent a decade in the picture framing industry, where I started off
        as a junior consultant many moons ago. I soon found myself exploring the
        picture framing industry intensively. Over the years I've had roles in
        workshops where I learnt the many different crafts and skills needed to
        make high-end bespoke picture frames. I am now a studio manager, lead
        consultant and project manager. My extensive experience has allowed me
        to work closely with some of the world's most prestigious galleries,
        artists (actors and musicians too!), art fairs, collectors, and interior
        designers. This requires a strong understanding of design, aesthetic,
        functionality, budgeting, market trends and most of all, a lot of
        problem - solving! The collaboration and communication skills I have
        developed has proven to be the key to my success when bringing
        cross-functional teams and individuals together on small and large
        projects.
      </section>
    </div>
  );
}

export default About;
