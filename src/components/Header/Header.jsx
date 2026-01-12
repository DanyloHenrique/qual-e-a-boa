import s from "./header.module.scss";
import Logo from "@/assets/icons/logoEvent.png";
import ButtonLink from "../ButtonLink/ButtonLink";
("@/components/ButtonLink/ButtonLink");
import { BrowserRouter } from "react-router-dom";

const Header = () => {
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
        <nav className={s.nav}>
          {/* <a href="">Eventos</a>
        <a href="">Categorias</a>
        <a href="">Sobre</a> */}
          <ButtonLink label="Eventos" to="/" isSecondaryLink />
          <ButtonLink label="Categorias" to="/" isSecondaryLink />
          <ButtonLink label="Sobre" to="/" isSecondaryLink />
        </nav>
        {/* <button>Criar Evento</button> */}
        <ButtonLink label="Criar Evento" to="/" />
      </BrowserRouter>
    </header>
  );
};

export default Header;
