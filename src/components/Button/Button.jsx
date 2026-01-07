import React from 'react';
import styles from './button.module.scss';

const Button = ({ children, variant = 'primary', icon, onClick, type = 'button', fontWeight }) => {
  const buttonClassName = `${styles.btnCustom} ${styles[variant]}`;

  return (
    <button 
      className={buttonClassName} 
      onClick={onClick} 
      type={type}
      style={{ fontWeight: fontWeight }}
    >
     
      {icon && (
        <span className={styles.iconWrapper}>
          <img src={icon} alt="" aria-hidden="true" />
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
  - icon: caminho da imagem importada (botões com ícone) (importar a imagem antes)
  - fontWeight: peso da fonte para o negrito.

  EXEMPLOS DE USO:

  1. Botão Comprar Ingresso (Com ícone PNG)
  <Button variant="primary" icon={Ticket}> comprar ingresso </Button>

  2. Botão Inscrever (Com ícone PNG)
  <Button variant="primary" icon={Send}> inscrever </Button>

  3. Botão Publicar Evento (Sem ícone e com fonte mais grossa)
  <Button variant="primary" fontWeight="900"> publicar evento </Button>

  4. Botão Cancelar (Variante Outline e sem ícone)
  <Button variant="outline"> cancelar </Button>

*/