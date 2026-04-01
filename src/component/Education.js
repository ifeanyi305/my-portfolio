import React from 'react';

const Education = () => (
  <div id="education">
    <div className="section-label">Education</div>
    {/* <h2 className="section-title">Where I learned to build.</h2> */}

    <div className="edu-card" data-aos="fade-up">
      <h2>Microverse</h2>
      <div className="edu-sub">Remote Full-Stack Software Development</div>
      <p>
        An intensive, full-time remote software
        engineering program headquartered in San Francisco, CA —
        built around pair programming, real project delivery,
        and cross-timezone collaboration.
      </p>
      <p>
        Completed
        {' '}
        <strong style={{ color: 'var(--text)', fontWeight: 700 }}>2,000+ hours</strong>
        {' '}
        mastering
        algorithms, data structures, and full-stack development. Shipped production projects
        with
        {' '}
        <a href="https://en.wikipedia.org/wiki/Ruby_on_Rails" target="_blank" rel="noreferrer">Ruby on Rails</a>
        ,
        {' '}
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">JavaScript</a>
        ,
        {' '}
        <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer">React</a>
        ,
        {' '}
        <a href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" target="_blank" rel="noreferrer">Redux</a>
        ,
        {' '}
        and PostgreSQL.
      </p>
      <p>
        Built
        {' '}
        <strong style={{ color: 'var(--text)', fontWeight: 700 }}>59+ projects</strong>
        {' '}
        ranging
        from simple landing pages to complex full-stack applications.
        Developed industry-standard GitHub
        workflow, daily standups, and the communication
        skills to collaborate effectively with developers
        across 6 continents.
      </p>
    </div>

    <div className="edu-card" data-aos="fade-up">
      <h2>Petroleum Training Institute</h2>
      <div className="edu-sub">B.Sc. Welding Technology · Dec 2017 – July 2021 · Warri, Nigeria</div>
      <p>
        Bachelor&apos;s degree in Welding Technology.
        This background shaped a problem-solving mindset and
        hands-on engineering discipline that carries directly
        into software development — precision,
        structural thinking, and a bias toward things that actually work.
      </p>
    </div>
  </div>
);

export default Education;
