/*eslint-disable*/
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsGithub, BsLinkedin, BsLink45Deg } from 'react-icons/bs';
import { SiMedium } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Intro = () => {
  const [isIntro, setIntro] = useState(false);
  const handleIntro = () => setIntro(!isIntro);

  return (
    <section className="intro-section" id="home">
      <div className="hero-inner">
        <TypeAnimation
          className="typing-text"
          sequence={[
            'Full-Stack Developer · Fintech · Web3 · Mobile',
            2000,
            'Building products that move money, ideas & people.',
            2000,
            'From concept to execution, I build software that solves real problems.',
            2000,
          ]}
          wrapper="span"
          cursor
          repeat={Infinity}
        />

        <h1 className="hero-name">
          Ifeanyi<br /><span>Joseph Oti.</span>
        </h1>

        <p className="hero-tagline">
          Full-Stack Developer & Fintech Builder
        </p>

        <p className="hero-desc">
          I engineer production-grade web and mobile applications — from
          crypto-fiat platforms and Web3 tools to SaaS dashboards and
          cross-border payment systems. Sub-1% bug rate. 90%+ client satisfaction.
          Always shipping.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" type="button" onClick={handleIntro}>
            Get in touch
          </button>
          <a className="btn-ghost" href="#project">
            Explore Portfolio
          </a>
          <a
            className="btn-ghost"
            href="https://docs.google.com/document/d/1ozWWbvHJQ3GR-xW43-O3KkUY4w4x1q7u/edit?usp=sharing&ouid=107530198202687026219&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>

        <ul className="hero-socials">
          <li>
            <a href="https://github.com/ifeanyi305" target="_blank" rel="noreferrer" aria-label="GitHub">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oti-joseph-ifeanyi/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@otijoseph305/the-future-of-web-development-cc4a7dbf10ff" target="_blank" rel="noreferrer" aria-label="Medium">
              <SiMedium />
            </a>
          </li>
          <li>
            <a href="mailto:otijoseph305@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </li>
        </ul>
      </div>

      {/* Contact quick-links overlay */}
      <ul onClick={handleIntro} className={isIntro ? 'intro-list2' : 'intro-none'}>
        <li>
          <button type="button">
            <a href="https://medium.com/@otijoseph305/the-future-of-web-development-cc4a7dbf10ff" target="_blank" rel="noreferrer">
              <SiMedium /> Medium
            </a>
          </button>
        </li>
        <li>
          <button type="button">
            <a href="https://www.linkedin.com/in/oti-joseph-ifeanyi/" target="_blank" rel="noreferrer">
              <BsLinkedin /> LinkedIn
            </a>
          </button>
        </li>
        <li>
          <button type="button">
            <a href="https://docs.google.com/document/d/102o_13jZXeXb1BhVK-gaE54Ht3f8kY988hebeuKjJDE/edit" target="_blank" rel="noreferrer">
              <BsLink45Deg /> Resume
            </a>
          </button>
        </li>
        <li>
          <button type="button">
            <a href="mailto:otijoseph305@gmail.com" target="_blank" rel="noreferrer">
              <HiOutlineMail /> Email
            </a>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
