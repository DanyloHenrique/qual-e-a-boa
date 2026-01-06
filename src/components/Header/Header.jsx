import s from "./index.module.scss";
import Logo from '@/assets/icons/logoEvent.png'
 

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img
          src={Logo}
          alt="Logo da aplicação vaibe-local , é  um ícone  de localização"
        />
        Vaibe-Local
      </div>
      <nav>
        <a href="">Eventos</a>
        <a href="">Categorias</a>
        <a href="">Sobre</a>
      </nav>

      <button>Criar Evento</button>
    </header>
  );
};

export default Header;
