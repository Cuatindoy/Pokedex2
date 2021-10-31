import React from "react";
import {IoLogoInstagram} from "react-icons/io5";
import {ImFacebook2 } from "react-icons/im";

const Footer = () => (
  <footer>
    <div className="letra">
    (✿◠‿◠) Creado por : Nicol Yajaira Cuatindoy Londoño (❁´◡`❁)
    <h3>No te olvides de segirme en mis redes sociales</h3>
    </div>

    <div className="iconos"><a href="https://www.facebook.com/me/"> <ImFacebook2 /></a></div>
    <div className="iconos">
      <a href="https://www.instagram.com/nicol_yajaira_/"> <IoLogoInstagram/>  </a>
    </div>

  </footer>
);

export default Footer;
