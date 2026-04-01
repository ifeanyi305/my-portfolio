/*eslint-disable*/
import React, { useState } from 'react';

const About = () => {
  const [aboutdesc, setaboutdesc] = useState(false);
  const aboutAccordion = () => setaboutdesc(!aboutdesc);

  const skillGroups = [
    { label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { label: 'Mobile', items: ['React Native', 'Expo', 'iOS', 'Android'] },
    { label: 'Backend', items: ['Node.js', 'RESTful APIs'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'] },
    // { label: 'Web3', items: ['Ethereum', 'Smart Contracts', 'Web3.js'] },
    { label: 'Tools', items: ['Git', 'GitHub', 'GitFlow', 'Docker', 'Postman', 'Webpack', 'Netlify'] },
    { label: 'AI & Automation', items: ['AI-assisted development', 'prompt engineering', 'workflow automation', 'integrating AI APIs into applications'] },
  ];

  return (
    <div data-aos="fade-up" id="about">
      <div className="section-label">About Me</div>
      <h2 className="section-title">The developer behind the code.</h2>

      <div className="about-me">
        <div className="about-desc">
          <p className={!aboutdesc ? 'more' : 'moreOn'}>
            I'm Ifeanyi Oti — an entrepreneurial Full-Stack Software Developer with 5+ years
            of experience shipping high-impact products across fintech, Web3, and SaaS. I've
            maintained a sub-1% bug rate across every production system I've owned, and I
            pride myself on delivering on time without cutting corners.

            <p style={{ marginTop: '16px' }}>
              My toolkit spans the full product lifecycle: pixel-perfect React and Next.js
              frontends, React Native mobile apps for iOS and Android, robust
              backends, and PostgreSQL/MongoDB databases. I've built crypto-fiat
              conversion platforms, cross-border payment systems, real-time Web3 dashboards,
              and worship presentation desktop applications — each one production-grade and
              built to scale.
            </p>

            <p style={{ marginTop: '16px' }}>
              Before tech, I was a fabricator welder — a trade that rewired how I think. I
              approach software the same way I approached metalwork: measure twice, cut once,
              and never ship something you wouldn't stand behind. That hands-on mindset
              shapes every technical decision I make.
            </p>

            <p style={{ marginTop: '16px' }}>
              I trained at Microverse — an intensive remote full-stack program — where I
              spent 2,000+ hours building real projects and pair-programming with developers
              across 6 continents. Communication, collaboration, and conflict resolution under
              pressure became second nature. I've since mentored junior developers through the
              same program, and I carry that teaching instinct into every team I join.
            </p>
          </p>

          <span className="seeMore-desc" onClick={aboutAccordion}>
            {!aboutdesc ? '↓ Read more' : '↑ Show less'}
          </span>

          <div className="about-skills">
            <h3>Core Technologies</h3>
            {skillGroups.map((group) => (
              <div key={group.label} style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {group.label}
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
