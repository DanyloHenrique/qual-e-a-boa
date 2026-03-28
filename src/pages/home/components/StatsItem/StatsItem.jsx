import s from './statsItem.module.scss';

export default function StatsItem({value, label, variant = 'pink'}) {

  let destaqueValue = s.destaque;

  if(variant === 'green'){
      destaqueValue =`${s.destaque} ${s.destaqueVerde}`;
  }

  return (
    <section className={s.boxStats}>
      <div className={s.statsItem}>
        <span className={destaqueValue}>{value}</span>
        <p>{label}</p>
      </div>
    </section>  
  )
}


//  * Props:
//  * value:  O número a ser exibido (ex: "10K").
//  * label:  texto descritivo abaixo do número (ex: "Eventos").
//  * variant: Cor do valor, pode ser 'pink' ou 'green' (padrão é 'pink')

//  * Exemplo de uso:
//  * <StatsItem value="10K" label="Eventos" variant="green" /> (para usar na cor verde) 
//  * <StatsItem value="10K" label="Eventos" variant="pink" /> (para usar na cor rosa)