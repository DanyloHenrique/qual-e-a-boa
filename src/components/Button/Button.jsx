import React from 'react';
import styles from './button.module.scss';

const Button = ({ children, variant = 'primary', icon: Icon, iconSize = 20, onClick, type = 'button', fontWeight}) => {
  const buttonClassName = `${styles.btnCustom} ${styles[variant]}`;

  return (
    <button 
      className={buttonClassName} 
      onClick={onClick} 
      type={type}
      style={{ fontWeight: fontWeight }}
    >
     
      {Icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          <Icon size={iconSize} />
        </span>
      )}
      
      <span>{children}</span>
    </button>
  );
};

export default Button;


/* 
   PROPS:
  - variant: "primary" (verde) ou "outline" (borda)
  - icon: componente de ícone (React Icons)
  - fontWeight: peso da fonte para o negrito.

  EXEMPLOS DE USO:

  importações:
import Button from "./components/Button/Button"; 
import { GrSend } from "react-icons/gr";
import { PiTicketBold } from "react-icons/pi";

  1. Botão Comprar Ingresso 
  <Button variant="primary" icon={PiTicketBold}> comprar ingresso </Button>

  2. Botão Inscrever 
  <Button variant="primary" icon={GrSend}> inscrever </Button>

  3. Botão Publicar Evento (Sem ícone e com fonte mais grossa)
  <Button variant="primary" fontWeight="900"> publicar evento </Button>

  4. Botão Cancelar (Variante Outline e sem ícone)
  <Button variant="outline"> cancelar </Button>

*/