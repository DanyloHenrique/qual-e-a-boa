import s from "./header.module.scss";
import ButtonLink from "../ButtonLink/ButtonLink";
import Logo from "../Logo/Logo";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  // const handleClose = () => setOpen(false);

  return (
    <header className={s.header}>
      <Logo />
      <>
        <button
          className={s.hamburger}
          onClick={handleToggle}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <MdClose size={22} /> : <FiMenu size={22} />}
        </button>

        <nav className={`${s.nav} ${open ? s.open : ""}`}>
          <ButtonLink label="Eventos" to="/" isSecondaryLink />
          <ButtonLink label="Categorias" to="/" isSecondaryLink />
          <ButtonLink label="Sobre" to="/" isSecondaryLink />
          <div className={s.createMobile}>
            <ButtonLink label="Criar Evento" to="/" />
          </div>
        </nav>

        <div className={s.createDesktop}>
          <ButtonLink label="Criar Evento" to="/" />
        </div>
      </>
    </header>
  );
};

export default Header;
