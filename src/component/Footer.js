import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiMedium } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => (
  <footer>
    <small>
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      Ifeanyi Joseph Oti. All rights reserved.
    </small>
    <ul>
      <li>
        <a href="https://medium.com/@otijoseph305/the-future-of-web-development-cc4a7dbf10ff" target="_blank" rel="noreferrer" aria-label="Medium">
          <SiMedium />
        </a>
      </li>
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
        <a href="mailto:otijoseph305@gmail.com" aria-label="Email">
          <HiOutlineMail />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
