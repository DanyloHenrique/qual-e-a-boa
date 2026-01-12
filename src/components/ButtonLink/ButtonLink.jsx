import React from "react";
import { Link } from "react-router-dom";

import s from "./buttonLink.module.scss";

function ButtonLink({ label, to, icon: Icon, iconSize = 20, isSecondaryLink }) {
  return (
    <Link
      to={to}
      className={`${s.buttonLink} ${
        isSecondaryLink ? s.buttonLinkSecondary : ""
      }`}
    >
      {label}
      {Icon && <Icon size={iconSize} aria-hidden />}
    </Link>
  );
}

export default ButtonLink;

/* envolver no componente BrowserRouter para testar

Props:
label: texto do link
to: pagina de direcionamento
icon: icone caso seja utilizado
iconSize: tamanho do icone
isSecondaryLink: para links secundarios (os links pretos com fundos transparente)

teste:
import { FiArrowRight } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

    <BrowserRouter>
      <ButtonLink
        label="Explorar"
        to="/produtos"
        icon={FiArrowRight}
        iconSize={24}
      />

      <ButtonLink label="Página inicial" to="/" />

      <ButtonLink label="Como funciona" to="/" isSecondaryLink />

      <ButtonLink
        label="Favoritar produto"
        to="/"
        icon={FaHeart}
        isSecondaryLink
      />
    </BrowserRouter>
*/
