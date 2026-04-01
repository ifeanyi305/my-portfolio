import React from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    id: 1,
    skills: ['JavaScript (ES2022+)', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    name: 'Mobile',
    id: 2,
    skills: ['React Native', 'Expo', 'iOS Development', 'Android Development'],
  },
  {
    name: 'Backend',
    id: 3,
    skills: ['Node.js', 'RESTful APIs', 'Express.js'],
  },
  {
    name: 'Databases',
    id: 4,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis'],
  },
  {
    name: 'Testing',
    id: 6,
    skills: ['TDD', 'Jest', 'RSpec', 'Unit Testing', 'Integration Testing'],
  },
  {
    name: 'Tools & DevOps',
    id: 7,
    skills: ['Git', 'GitHub', 'Gitflow', 'Webpack', 'Babel', 'npm', 'Postman', 'Netlify', 'Chrome DevTools'],
  },
  {
    name: 'AI & Automation',
    id: 8,
    skills: ['AI-assisted development', 'prompt engineering', 'workflow automation', 'integrating AI APIs into applications'],
  },
  {
    name: 'Professional',
    id: 9,
    skills: ['Remote Pair Programming', 'Mentoring', 'Technical Leadership', 'Cross-functional Collaboration'],
  },
];

const Skills = () => (
  <div id="skills">
    <div className="section-label">Expertise</div>
    <h2 className="section-title">My tech stack.</h2>
    <div className="skills-wrapper">
      {skillCategories.map((cat) => (
        <div className="skill-category" key={cat.id} data-aos="fade-up">
          <div className="skill-category-name">{cat.name}</div>
          <div className="skill-badges">
            {cat.skills.map((skill) => (
              <span className="skill-badge" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
