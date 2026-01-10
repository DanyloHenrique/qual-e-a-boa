import s from "./header.module.scss";
import Logo from "@/assets/icons/logoEvent.png";

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
      <nav className={s.nav}>
        <a href="">Eventos</a>
        <a href="">Categorias</a>
        <a href="">Sobre</a>
      </nav>

      <button>Criar Evento</button>
    </header>
  );
};

export default Header;
