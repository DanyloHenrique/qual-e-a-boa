import s from './ButtonIcon.module.scss';

const ButtonIcon = ({ src, onClick, alt }) => {
  return (
    <button onClick={onClick} className={s.buttonIcon}>
      <img src={src} alt={alt} className={s.icon} />
    </button>
  );
};

export default ButtonIcon;
