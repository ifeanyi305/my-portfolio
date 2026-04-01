/* eslint-disable react/prop-types */
/*eslint-disable*/
import React, { useState } from 'react';

const Myproject = ({ allProject }) => {
  const [ismodal, modalon] = useState(false);
  const handleModal = () => modalon(!ismodal);

  const hasImage = !!allProject.img;
  const hasLiveDemo = !!allProject.liveDemo;
  const hasGithub = !!allProject.github;

  return (
    <>
      <div className="projects" onClick={handleModal} data-aos="fade-up">
        <h2 className="project-name">{allProject.name}</h2>

        {hasImage ? (
          <img className="project-img" src={allProject.img} alt={allProject.name} />
        ) : (
          <div className="project-placeholder">
            <span className="ph-icon">{allProject.icon || '📦'}</span>
            <span>{allProject.iconLabel || 'View Project'}</span>
          </div>
        )}

        <ul>
          {allProject.lang1 && <li>{allProject.lang1}</li>}
          {allProject.lang2 && <li>{allProject.lang2}</li>}
          {allProject.lang4 && <li>{allProject.lang4}</li>}
        </ul>

        <div className="project-btn">View details →</div>
      </div>

      <div onClick={handleModal} className={ismodal ? 'more-projects-on' : 'more-projects'}>
        <div className="project-wrapper" onClick={(e) => e.stopPropagation()}>
          <div>
            {hasImage ? (
              <img className="img2" src={allProject.img} alt={allProject.name} />
            ) : (
              <div className="project-placeholder-modal">
                <span style={{ fontSize: '52px', lineHeight: 1 }}>{allProject.icon || '📦'}</span>
                <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {allProject.iconLabel}
                </span>
              </div>
            )}
          </div>

          <div className="description">
            <h1>{allProject.name}</h1>
            <p>{allProject.desc}</p>

            <ul className="lang-list">
              {allProject.lang1 && <li className="list-item">{allProject.lang1}</li>}
              {allProject.lang2 && <li className="list-item">{allProject.lang2}</li>}
              {allProject.lang4 && <li className="list-item">{allProject.lang4}</li>}
            </ul>

            <div className="btn-con">
              {hasLiveDemo && (
                <button type="button">
                  <a target="_blank" rel="noreferrer" href={allProject.liveDemo}>Live Demo</a>
                </button>
              )}
              {hasGithub && (
                <button type="button">
                  <a target="_blank" rel="noreferrer" href={allProject.github}>GitHub</a>
                </button>
              )}
              <button type="button" onClick={handleModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myproject;
