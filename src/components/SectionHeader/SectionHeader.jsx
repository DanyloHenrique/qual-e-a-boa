import s from './sectionHeader.module.scss';

export default function SectionHeader({titulo, variant = 'pink', palavraDestaque, subtitulo}) {

    let destaqueTitulo = s.destaque;

    if(variant === 'green'){
        destaqueTitulo =`${s.destaque} ${s.destaqueVerde}`;
    }

  return (
    <header className={s.sectionTitle}>
        <h2>{titulo} <span className={destaqueTitulo}>{palavraDestaque}</span></h2>
        <p>{subtitulo}</p>
    </header>
  )
}





//  * Props:
//  * É para usar no titulo das seções do site aonde a palavra de destaque deve mudar de cor conforme o tema da seção
//  * texto: Texto normal do título
//  * palavraDestaque: Texto de destaque do título
//  * tituloHeader: Booleano que define se o título de destaque será verde (true) ou rosa (false)
//  * subtitulo: Texto do subtitulo da seção

//  * Exemplo de uso: 
//  * <SectionHeader texto="Hello" palavraDestaque="World" variant="green" subtitulo="Subtitulo da seção" /> (para usar na cor verde) 
//  * <SectionHeader texto="Hello" palavraDestaque="World" variant="pink" subtitulo="Subtitulo da seção" /> (para usar na cor rosa)*/