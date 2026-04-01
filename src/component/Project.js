import React from 'react';
import Myproject from './Myproject';
import MonieWave from './images/MonieWave.png';
import easyLaunch from './images/easyLaunch.png';
import Fllow from './images/fllow.png';
import Projector from './images/projector.png';
import Swiift from './images/swiift.png';

const project = [
  {
    name: 'Swiift — Crypto-Fiat Fintech App',
    id: 5,
    img: Swiift,
    iconLabel: 'Fintech · Mobile',
    lang1: 'React Native',
    lang2: 'iOS & Android',
    lang4: 'Fintech',
    desc: 'Swiift is a cross-platform mobile fintech app that lets users deposit crypto and convert it to fiat (USD/NGN). Features include bill payments, virtual cards for international payments, USD/NGN vault savings, and intelligent automation tools: Rapid Ramp (auto-credits bank on crypto deposit), Rate Alert (notifies when rates hit targets), and Auto-Convert (rules-based automatic conversion). Built for iOS and Android — Android APK available, Play Store/App Store launch pending.',
    liveDemo: 'https://drive.google.com/drive/folders/1wMOcA5dvQ4Tfs4kSTrY__HphpZzAAGYY?usp=sharing',
    github: null,
  },
  {
    name: 'Projector — Worship Presentation Desktop App',
    id: 6,
    img: Projector,
    iconLabel: 'Desktop App',
    lang1: 'Desktop App',
    lang2: 'Confidential',
    lang4: 'EasyWorship Replica',
    desc: 'Projector is a full-featured desktop application for church worship services — a feature-complete replica of EasyWorship. Worship teams use it to project Bible verses, song lyrics, announcements, and media with professional-grade presenter controls, real-time stage display output, and a fast-switching UI optimised for live services. The codebase is proprietary and under NDA; Demo video is available below.',
    liveDemo: 'https://drive.google.com/drive/folders/1kZonulyB2n1OqK199clmWANF3217pwo8?usp=sharing',
    github: null,
  },
  {
    name: 'Fllow — Creator Commerce Platform',
    id: 1,
    img: Fllow,
    lang1: 'Next.js',
    lang2: 'JavaScript',
    lang4: 'Convex',
    desc: 'Fllow is an e-commerce and link-in-bio platform built for creators to sell digital products, online courses, and memberships — with zero coding required. Think Gumroad meets Linktree, purpose-built for the creator economy.',
    liveDemo: null,
    github: 'https://github.com/V-Blaze/Fllow-FE',
  },
  {
    name: 'MonieWave — Cross-Border Remittance',
    id: 3,
    img: MonieWave,
    lang1: 'Ruby on Rails',
    lang2: 'React',
    lang4: 'Redux',
    desc: 'MonieWave enables residents of Europe to send money swiftly and securely to Nigeria — no hidden fees, no complications. Achieved 75% user retention and named one of the "Top Fintech Web Apps of the Year" by a major tech publication.',
    liveDemo: null,
    github: 'https://github.com/ifeanyi305/Ratehive_Frontend',
  },
  {
    name: 'Easy Launch — Web3 Crypto Platform',
    id: 4,
    img: easyLaunch,
    lang1: 'Web3 / Blockchain',
    lang2: 'React',
    lang4: 'Firebase',
    desc: 'Easy Launch is an all-in-one Web3 platform for creating, managing, and deploying custom cryptocurrencies and smart contracts. Drove a 50% increase in DAUs and 40% growth in transaction volume in year one. Awarded "Innovator of the Year."',
    liveDemo: null,
    github: 'https://github.com/ifeanyi305/initial_coin_offering',
  },
];

const Project = () => (
  <div id="project">
    <div className="section-label">Featured Work</div>
    <h2 className="section-title">Featured Projects.</h2>
    <div className="grid-container">
      {project.map((allProject) => (
        <Myproject allProject={allProject} key={allProject.id} />
      ))}
    </div>
  </div>
);

export default Project;
