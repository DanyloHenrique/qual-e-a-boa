import React from "react";
import { Link } from "react-router-dom";

import s from "./buttonLink.module.scss";

function ButtonLink({ text, to, icon, isSecondaryLink }) {
  return (
    <Link
      to={to}
      className={`${s.buttonLink} ${
        isSecondaryLink ? s.buttonLinkSecondary : ""
      }`}
    >
      {text}
      {icon && <img src={icon} aria-hidden />}
    </Link>
  );
}

export default ButtonLink;
