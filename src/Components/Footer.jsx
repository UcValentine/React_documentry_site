import React from 'react';
import            './Footer.css';

const Footer = ( props ) => {

  return (
    <footer id="footer">
      <a  title="Visit my profile on LinkedIn"
          href="https://www.linkedin.com/in/valentine-onah/"
          target="_blank"
          rel="noopener noreferrer"
        > 2020 &copy; Valentine Onah
      </a>
      <a  title="Go back to the top of the page"
          id="back-to-top"
          href="#header"
          onClick={ e => {
            e.preventDefault();
            const element = props.topRef.current; 
            element.scrollIntoView( { behavior: 'smooth' } );
          } }
        ><i className="fas fa-chevron-circle-up"></i>
      </a>
    </footer>
  );

}

export default Footer;