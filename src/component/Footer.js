import React from "react";
import { pageLink, socialLink } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLink.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-links">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLink.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        &copy; 2025 Gumel Innovation.
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
