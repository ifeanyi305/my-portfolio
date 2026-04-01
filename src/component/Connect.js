import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import connect from './images/connect.png';

const Connect = () => {
  const [state, handleSubmit] = useForm('xrgvbbed');
  const [ismodal, modalon] = useState(false);
  const handleModal = () => modalon(!ismodal);

  if (state.succeeded) {
    return (
      <div className="thanks">
        <p>Message sent — I&apos;ll get back to you shortly. 🙌</p>
        <button
          type="button"
          onClick={handleModal}
          style={{
            marginTop: '10px', background: 'none', border: '1px solid rgba(45,212,160,0.4)', borderRadius: '100px', padding: '6px 20px', cursor: 'pointer', color: 'var(--success)',
          }}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <section id="connect">
      <div className="section-label">Contact</div>
      <h2 className="section-title">Let&apos;s build something.</h2>

      <div className="connect-con" data-aos="fade-up">
        <div className="down">
          <div className="p-con">
            <p>
              Whether you have a fintech product to build, a codebase that needs
              serious care, or just want to explore what&apos;s possible — I&apos;d love to hear
              about it.
            </p>
          </div>
          <button onClick={handleModal} className="contact-btn" type="button">
            Send a message →
          </button>
        </div>
        <div>
          <img className="wrap-img1" src={connect} alt="Connect" />
        </div>
      </div>

      <div className={ismodal ? 'more-projects-on' : 'more-projects'}>
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', padding: '36px', width: '100%', maxWidth: '480px',
        }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, marginBottom: '8px',
          }}
          >
            Get in touch
          </h3>
          <p style={{
            fontSize: '14px', color: 'var(--muted)', marginBottom: '24px', lineHeight: '1.65',
          }}
          >
            Fill out the form and I&apos;ll reply within 24 hours.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" required id="name" name="name" placeholder="Full Name" />
            <input type="email" id="email" name="email" required placeholder="Email address" />
            <textarea required id="message" name="message" rows="4" placeholder="Tell me about your project..." />
            <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
              <button className="connect-btn" type="submit" disabled={state.submitting} style={{ flex: 1, marginTop: 0 }}>
                {state.submitting ? 'Sending...' : 'Send message'}
              </button>
              <button className="connect-btn red" onClick={handleModal} type="button" style={{ marginTop: 0 }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
