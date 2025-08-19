import React from "react";

const Footer = ({ name }) => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
  </footer>
);

export default Footer;
