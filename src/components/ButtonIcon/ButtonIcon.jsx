import s from "./ButtonIcon.module.scss";

const ButtonIcon = ({ Icon, onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={s.buttonIcon}
      aria-label={ariaLabel}
      type="button"
    >
      <span className={s.icon}> <Icon /> </span>
    </button>
  );
};

export default ButtonIcon;
