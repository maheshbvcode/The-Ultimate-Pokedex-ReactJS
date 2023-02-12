import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Loading } from './Loading';
const Footer = () => {

  const [loading,setLoading] = useState(true)
  return ( 
    <main>
    {loading ? (
				null
			) : ( 
      <>
      <footer>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100009188404835">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://github.com/maheshbvcode/">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/mahesh_the_boss007/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/mahesh-bv-b72124204/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} Mahesh BV 
      </div>
    </footer>
    </>
    )}
    </main>
    
  );
};

export default Footer;
