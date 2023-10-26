import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer text-light text-center py-3">
      &copy; {new Date().getFullYear()} UST
    </footer>
  );
};
export default Footer;