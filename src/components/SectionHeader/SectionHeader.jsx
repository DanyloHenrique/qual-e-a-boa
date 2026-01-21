import s from './sectionHeader.module.scss';

export default function SectionHeader({texto, tituloHeader, palavraDestaque}) {

    let destaqueTitulo = s.destaque;

    if(tituloHeader === true){
        destaqueTitulo =`${s.destaque} ${s.destaqueVerde}`;
    }

  return (
    <>
        <h2>{texto} <span className={destaqueTitulo}>{palavraDestaque}</span></h2>
    </>
  )
}





//  * Props:
//  * É para usar no titulo das seções do site aonde a palavra de destaque deve mudar de cor conforme o tema da seção
//  * texto: Texto normal do título
//  * palavraDestaque: Texto de destaque do título
//  * tituloHeader: Booleano que define se o título de destaque será verde (true) ou rosa (false)

//  * Exemplo de uso: 
//  * <SectionHeader texto="Hello" palavraDestaque="World" tituloHeader={true} /> (para usar na cor verde)
//  * <SectionHeader texto="Hello" palavraDestaque="World" tituloHeader={false} /> (para usar na cor rosa)*/