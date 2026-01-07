import React from 'react'
import s from './index.module.scss'
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import logoSemTexto from "/src/assets/images/logo-sem-texto.png"
import { LuMapPin } from "react-icons/lu";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.flexFooter}>
        <section className={s.containerFooterLogo}>
          <div className={s.flexLogo}>
            <img src={logoSemTexto} alt="Logo Qual é a boa" />
            <h2>QUAL É A BOA</h2>
          </div>

          <p>Sua plataforma de eventos locais. Descubra, conecte e viva experiências únicas.</p>
          
          <nav aria-label="Redes sociais">
            <ul className={s.socialList}>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className={s.containerFooterLinks}>
          <nav aria-label="Explorar">
            <h3>Explorar</h3>
            <ul>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Categorias</a></li>
              <li><a href="#">Locais</a></li>
              <li><a href="#">Artistas</a></li>
            </ul>
          </nav>
          <nav aria-label="Suporte">
            <h3>Suporte</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Termos</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </nav>
          <nav aria-label="Para Organizadores">
            <h3>Para Organizadores</h3>
            <ul>
              <li><a href="#">Criar Eventos</a></li>
              <li><a href="#">Painel</a></li>
              <li><a href="#">Recursos</a></li>
              <li><a href="#">Preços</a></li>
            </ul>
          </nav>
        </section>
      </div>
      <div className={s.containerFooterCopyright}>
        <small className={s.copyrightText}>&#169; 2025 Qual é a Boa? Todos os direitos reservados.</small>
        <div className={s.footerContainerIcon}>
          <LuMapPin aria-hidden="true" className={s.footerIconPin}/>
          <span>Brasil</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer