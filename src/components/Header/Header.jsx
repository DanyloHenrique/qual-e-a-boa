import s from "./header.module.scss";
import Logo from "@/assets/icons/logoEvent.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleClose = () => setOpen(false);

  return (
    <header className={s.header}>
      <div className={s.containerLogo}>
        <img
          src={Logo}
          alt="Logo da aplicação vaibe-local , é  um ícone  de localização"
        />
        <p>Vaibe-Local</p>
      </div>
      <BrowserRouter>
        <button
          className={s.hamburger}
          onClick={handleToggle}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <MdClose size={22} /> : <FiMenu size={22} />}
        </button>

        <nav className={`${s.nav} ${open ? s.open : ""}`} onClick={handleClose}>
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
      </BrowserRouter>
    </header>
  );
};

export default Header;
