import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          GO FISH YOURSELF
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
					<a
              class='social-icon-link facebook'
              href='https://www.facebook.com/blobfishkiller'
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/jpaaaps/?hl=fr'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UC6aa1_W6O_Vm89WE5jLLKtQ'
              target='_blank'
              rel="noreferrer"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
          </div>
					<div class='footer-logo'>
						<img className='logoblob3' src='/photos/blobagram.png' alt='logo blob pentagram' />
					</div>
					<small class='website-rights'>JP GERARD © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;