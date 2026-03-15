import React from 'react';
import { PiStarFour } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";
import ButtonLink from '../../../../components/ButtonLink/ButtonLink';
import StatsItem from '../StatsItem/StatsItem';
import s from './HeroSection.module.scss';
import bannerImg from '../../../../assets/images/banner-hero.png'; 

export default function HeroSection() {
  return (
    <section 
      className={s.hero} 
      style={{ '--banner-url': `url(${bannerImg})` }}
    >
      <div className={s.container}>        
   
        <div className={s.badge}>
          <PiStarFour size={14} className={s.badgeIcon} />
          <span>+500 eventos esta semana</span>
        </div>

        <h1 className={s.title}>
          DESCUBRA O <span className={s.highlight}>MELHOR ROLÊ</span> DA CIDADE
        </h1>

        <p className={s.description}>
          Shows, festas, exposições e muito mais. Encontre eventos incríveis perto de você e viva experiências inesquecíveis.
        </p>

        <div className={s.actions}>
          <ButtonLink 
            label="EXPLORAR EVENTOS" 
            to="/listEvents" 
            icon={FiArrowRight} 
          />
          <ButtonLink 
            label="Como Funciona" 
            to="/about" 
            isSecondaryLink 
          />
        </div>

        <div className={s.statsWrapper}>
          <StatsItem value="10K+" label="Eventos" variant="green" />
          <StatsItem value="50K+" label="Usuários" variant="pink" />
          <StatsItem value="200+" label="Cidades" variant="green" />
        </div>

      </div>
    </section>
  );
}